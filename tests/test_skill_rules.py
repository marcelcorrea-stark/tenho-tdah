"""Checks that the anxiety-aware rules reach the skill and every adapter that copies them."""

import json
import unittest
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
SKILL = ROOT / "skills" / "tenho-tdah" / "SKILL.md"
ADAPTERS = [
    ROOT / "INSTALL.md",
]
REQUIRED_SKILL_PHRASES = [
    "O que a ansiedade muda na leitura",
    "Estimativa aproximada",
    "não sei estimar",
    "Sei:",
    "Não sei:",
    "Para saber:",
    "Afeta só",
    "reversível",
]


class AnxietyAwareRulesTest(unittest.TestCase):
    def test_skill_carries_every_required_phrase(self):
        text = SKILL.read_text(encoding="utf8")
        for phrase in REQUIRED_SKILL_PHRASES:
            with self.subTest(phrase=phrase):
                self.assertIn(phrase, text)

    def test_progress_examples_do_not_reuse_the_eval_scenario(self):
        # The multi-step-progress eval case is "step 3 of 5, schema done". A rule
        # example with the same numbers gets copied verbatim, so the model repeats
        # "step 3 concluded" even when the user says step 3 is the current one.
        for path in [SKILL, *ADAPTERS]:
            with self.subTest(file=path.name):
                self.assertNotIn("3 de 5", path.read_text(encoding="utf8"))

    def test_skill_keeps_ten_numbered_rules(self):
        text = SKILL.read_text(encoding="utf8")
        for number in range(1, 11):
            self.assertIn("### {number}. ".format(number=number), text)
        self.assertNotIn("### 11. ", text)

    def test_skill_never_promises_diagnosis_or_treatment(self):
        text = SKILL.read_text(encoding="utf8")
        self.assertIn("não diagnostica nem trata", text)

    def test_detail_exception_covers_plans_and_analysis_not_only_explanations(self):
        # Responses to explicit plan and detail requests came out about 40% shorter
        # than the baseline and were judged thinner, so the exception must fire on
        # the intent (plan, analysis, detail) and not only on the word "explicar".
        skill = SKILL.read_text(encoding="utf8")
        self.assertIn('"planeje"', skill)
        self.assertIn("verificação, riscos e casos de borda", skill)
        install = (ROOT / "INSTALL.md").read_text(encoding="utf8")
        self.assertIn("explicação, plano ou detalhe", install)

    def test_cursor_mirror_is_identical(self):
        mirror = ROOT / ".cursor" / "skills" / "tenho-tdah" / "SKILL.md"
        self.assertEqual(SKILL.read_text(encoding="utf8"), mirror.read_text(encoding="utf8"))

    def test_adapters_mention_the_uncertainty_line(self):
        for path in ADAPTERS:
            with self.subTest(file=path.name):
                self.assertIn("Sei:", path.read_text(encoding="utf8"))

    def test_eval_catalog_covers_each_new_rule(self):
        ids = {
            json.loads(line)["id"]
            for line in (ROOT / "evals" / "cases.jsonl").read_text(encoding="utf8").splitlines()
        }
        self.assertTrue(
            {"unknown-outcome", "estimate-without-basis", "error-with-scope", "options-reversible"} <= ids
        )


if __name__ == "__main__":
    unittest.main()
