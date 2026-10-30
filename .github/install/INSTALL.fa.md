# نحوه نصب

<details>
<summary><strong>Antigravity (<code>agy</code>)</strong></summary>

### نصب

```bash
agy plugin install https://github.com/marcelcorrea-stark/tenho-tdah
```

### بررسی صحت نصب

```bash
agy plugin list
```

### به‌روزرسانی

```bash
agy plugin uninstall tenho-tdah
agy plugin install https://github.com/marcelcorrea-stark/tenho-tdah
```

### حذف نصب

```bash
agy plugin uninstall tenho-tdah
```

یا اگر می‌خواهید نصب بماند اما غیرفعال شود: `agy plugin disable tenho-tdah`.

### همیشه فعال (اختیاری)

این خطوط را به فایل `~/.gemini/GEMINI.md` اضافه کنید:

```markdown
## Output style

The reader has ADHD. Shape every response so it can be acted on:

1. Lead with the answer or next action: command, path, or snippet first.
2. Number multi-step work; one bounded action per step.
3. End with one next action doable in under two minutes.
4. Finish the current issue before raising a new one.
5. Restate progress each turn ("step 3 of 5 done").
6. Give time estimates in concrete units, never "a bit".
7. After a change, show what now works.
8. Errors: state location, cause, and fix. No drama.
9. Cap lists to 5 items.
10. No preamble, no recaps, no closers.

Exceptions: explain fully when asked to explain. Confirm before destructive actions. After three failed fixes, stop and name the doubtful assumption. If the request is ambiguous, ask one short question.
```

</details>

<details>
<summary><strong>AstronClaw (مهارت سفارشی)</strong></summary>

AstronClaw از وارد کردن فایل Markdown به عنوان یک مهارت سفارشی پشتیبانی می‌کند. این روش از فایل `SKILL.md` موجود استفاده می‌کند. برای جزئیات بارگذاری و مدیریت، به [راهنمای رسمی مهارت‌ها](https://github.com/iflytek/astronclaw-tutorial/blob/main/docs/guide/astronclaw/skills.md) مراجعه کنید.

این مراحل بر اساس مستندات AstronClaw نوشته شده، اما با این مهارت خاص آزمایش نشده است. لطفاً قبل از فعال‌سازی، دستورالعمل‌های واردشده را بررسی کنید.

### نصب

1. فایل [SKILL.md اصلی](https://raw.githubusercontent.com/marcelcorrea-stark/tenho-tdah/main/skills/tenho-tdah/SKILL.md) را دانلود کرده و با نام `SKILL.md` ذخیره کنید. قبل از بارگذاری، محتوای آن را مرور کنید.
2. در AstronClaw، بخش **我的技能 (My skills)** را باز کنید، **新建 (New)** را انتخاب کرده و آن فایل `.md` را بارگذاری کنید.
3. مطمئن شوید نام مهارت واردشده `tenho-tdah` است. برای کنترل در دسترس بودن آن، از گزینه **启用/禁用 (Enable/Disable)** استفاده کنید.

فقط فایل Markdown مهارت مورد نیاز است. با بارگذاری این فایل، فایل به AstronClaw ارسال می‌شود؛ مانیفست‌های پلاگین و هوک‌های موجود در ریپازیتوری بخشی از این تنظیمات نیستند.

### بررسی و فعال‌سازی

تأیید کنید که `tenho-tdah` در **My skills** ظاهر شده است. از گزینه **下载 (Download)** برای مقایسه دستورالعمل‌های واردشده با نسخه اصلی استفاده کنید، سپس آن را فعال کرده و دستور زیر را امتحان کنید:

```text
Use the tenho-tdah skill for this conversation. Explain how to create an empty Git repository in a new folder.
```

بررسی کنید که پاسخ با اقدام عملی شروع شود و مراحل شماره‌گذاری شده باشند. این یک بررسی دستی از مهارت واردشده است و موفقیت‌آمیز بودن بارگذاری به تنهایی تأیید نمی‌کند که قوانین پاسخ‌دهی اعمال می‌شوند.

### نکته فعال‌سازی

AstronClaw هم از درخواست‌های صریح و هم از فراخوانی خودکار مهارت پشتیبانی می‌کند. راهنمای آن مشخص نمی‌کند که آیا `disable-model-invocation: true` را رعایت می‌کند یا خیر، بنابراین زمانی که نمی‌خواهید مهارت در دسترس باشد، از گزینه **Disable** استفاده کنید. نیازی به استفاده از دستور اسلش `/tenho-tdah` نیست.

این مهارت به دستیار دستور می‌دهد تا زمانی که نگویید `parar modo tdah` یا `modo normal`، این سبک را برای مکالمه حفظ کند. این دستور، تنظیمات پلتفرم را تغییر نمی‌دهد؛ برای شروع یک نشست تازه بدون این مهارت، آن را غیرفعال کرده و یک مکالمه جدید شروع کنید.

### به‌روزرسانی

آخرین نسخه `SKILL.md` اصلی را دانلود کنید. اگر نسخه واردشده را سفارشی کرده‌اید، ابتدا با استفاده از **下载 (Download)** از آن نسخه پشتیبان بگیرید. برای جایگزینی کامل، ورودی قدیمی `tenho-tdah` را حذف کنید، مراحل واردسازی را تکرار کرده و دستور بررسی را در یک مکالمه جدید اجرا کنید.

### حذف نصب

در بخش **My skills**، گزینه `tenho-tdah` را انتخاب و **删除 (Delete)** را بزنید، سپس یک مکالمه جدید شروع کنید. اگر می‌خواهید نسخه واردشده را برای بعداً نگه دارید، به جای حذف، آن را **Disable** کنید.

</details>

<details>
<summary><strong>Claude Code</strong></summary>

### نصب

```bash
claude plugin marketplace add marcelcorrea-stark/tenho-tdah
claude plugin install tenho-tdah@tenho-tdah
```

سپس دستور `/tenho-tdah` را تایپ کنید.

### بررسی صحت نصب

```bash
claude plugin list
```

### به‌روزرسانی

```bash
claude plugin marketplace update tenho-tdah
claude plugin update tenho-tdah@tenho-tdah
```

### حذف نصب

```bash
claude plugin uninstall tenho-tdah
claude plugin marketplace remove tenho-tdah
```

یا اگر می‌خواهید نصب بماند اما غیرفعال شود: `claude plugin disable tenho-tdah`.

### همیشه فعال (اختیاری)

یک هوک `SessionStart` مجموعه قوانین کامل را در ابتدای هر نشست بارگذاری می‌کند و نیازی به تایپ `/tenho-tdah` نیست:

```bash
touch ~/.claude/.tenho-tdah-always
```

اگر از دایرکتوری پیکربندی سفارشی Claude استفاده می‌کنید، پرچم را در آنجا ایجاد کنید:

```bash
touch "$CLAUDE_CONFIG_DIR/.tenho-tdah-always"
```

بازگشت به حالت فعال‌سازی دستی:

```bash
rm ~/.claude/.tenho-tdah-always
```

این هوک تنها زمانی اجرا می‌شود که فایل پرچم وجود داشته باشد، بنابراین نصب پلاگین به خودی خود چیزی را تغییر نمی‌دهد. دستور "parar modo tdah" همچنان آن را برای نشست جاری خاموش می‌کند.

</details>

<details>
<summary><strong>Codex</strong></summary>

### نصب

```bash
codex plugin marketplace add marcelcorrea-stark/tenho-tdah --ref main
codex plugin add tenho-tdah@tenho-tdah
```

برای فراخوانی صریح مهارت، دستور `$tenho-tdah` را تایپ کنید. Codex آن را به صورت خودکار فعال نمی‌کند.

### بررسی صحت نصب

```bash
codex plugin list
```

### به‌روزرسانی

```bash
codex plugin marketplace upgrade tenho-tdah
codex plugin remove tenho-tdah
codex plugin add tenho-tdah@tenho-tdah
```

### حذف نصب

```bash
codex plugin remove tenho-tdah
codex plugin marketplace remove tenho-tdah
```

### همیشه فعال (اختیاری)

این خطوط را به فایل `~/.codex/AGENTS.md` اضافه کنید:

```markdown
## Output style

The reader has ADHD. Shape every response so it can be acted on:

1. Lead with the answer or next action: command, path, or snippet first.
2. Number multi-step work; one bounded action per step.
3. End with one next action doable in under two minutes.
4. Finish the current issue before raising a new one.
5. Restate progress each turn ("step 3 of 5 done").
6. Give time estimates in concrete units, never "a bit".
7. After a change, show what now works.
8. Errors: state location, cause, and fix. No drama.
9. Cap lists to 5 items.
10. No preamble, no recaps, no closers.

Exceptions: explain fully when asked to explain. Confirm before destructive actions. After three failed fixes, stop and name the doubtful assumption. If the request is ambiguous, ask one short question.
```

</details>

<details>
<summary><strong>Gemini CLI</strong></summary>

Gemini CLI بازارچه (marketplace) پلاگین ندارد، بنابراین دو روش بومی وجود دارد: یک **دستور سفارشی** (اختیاری، تا زمانی که فراخوانی نکنید خاموش است) یا یک **افزونه** (پس از نصب همیشه فعال است). روش دستور با حالت پیش‌فرض این مهارت همخوانی دارد؛ مگر اینکه بخواهید قوانین در هر نشست اعمال شوند، این روش را انتخاب کنید.

### نصب (دستور، فعال‌سازی دستی)

```bash
mkdir -p ~/.gemini/commands
curl -fsSL https://raw.githubusercontent.com/marcelcorrea-stark/tenho-tdah/main/skills/tenho-tdah/agents/gemini.toml \
  -o ~/.gemini/commands/tenho-tdah.toml
```

یک نشست جدید شروع کنید و `/tenho-tdah` را تایپ کنید. این حالت برای آن نشست فعال می‌ماند.

### نصب (افزونه، همیشه فعال)

```bash
gemini extensions install https://github.com/marcelcorrea-stark/tenho-tdah
```

این افزونه `GEMINI.md` را بارگذاری می‌کند که مهارت کامل را وارد می‌کند، بنابراین قوانین از همان پیام اول اعمال می‌شوند. `git` باید نصب باشد.

### بررسی صحت نصب

```bash
gemini extensions list          # روش افزونه
ls ~/.gemini/commands           # روش دستور: فایل tenho-tdah.toml باید موجود باشد
```

یا در یک نشست `/` را تایپ کنید و تأیید کنید که `tenho-tdah` در لیست است.

### به‌روزرسانی

```bash
gemini extensions update tenho-tdah    # روش افزونه
# روش دستور: دستور curl بالا را مجدداً اجرا کنید
```

### حذف نصب

```bash
gemini extensions uninstall tenho-tdah    # روش افزونه
rm ~/.gemini/commands/tenho-tdah.toml     # روش دستور
```

</details>

<details>
<summary><strong>GitHub Copilot (در VS Code و Copilot CLI)</strong></summary>

Copilot مهارت‌های عامل (Agent Skills) را به صورت بومی می‌خواند: همان فایل `SKILL.md` بدون نیاز به تبدیل. این ابزار پوشه‌های `.github/skills/`، `.claude/skills/` و `.agents/skills/` در پروژه، و همچنین `~/.copilot/skills/`، `~/.claude/skills/` و `~/.agents/skills/` را به صورت سراسری اسکن می‌کند.

### نصب

```bash
npx skills add marcelcorrea-stark/tenho-tdah -a github-copilot        # فقط این پروژه
npx skills add marcelcorrea-stark/tenho-tdah -a github-copilot -g     # همه پروژه‌ها
```

بدون استفاده از CLI، پوشه مهارت را در هر دایرکتوری که Copilot اسکن می‌کند کپی کنید:

```bash
git clone https://github.com/marcelcorrea-stark/tenho-tdah
mkdir -p ~/.copilot/skills
cp -R tenho-tdah/skills/tenho-tdah ~/.copilot/skills/
```

### بررسی صحت نصب

در ورودی چت `/` را تایپ کنید و تأیید کنید که `tenho-tdah` ظاهر می‌شود. یا:

```bash
npx skills list
npx skills ls -g    # اگر به صورت سراسری نصب شده است
```

### به‌روزرسانی

```bash
npx skills update tenho-tdah
```

یا پس از `git pull`، پوشه را مجدداً کپی کنید.

### حذف نصب

```bash
npx skills remove tenho-tdah
```

یا پوشه `tenho-tdah` را از دایرکتوری مهارت‌هایی که در آن نصب شده حذف کنید.

### نکته فعال‌سازی

Copilot گزینه `disable-model-invocation` را رعایت می‌کند: تا زمانی که مهارت را فراخوانی نکنید، هیچ قانونی اعمال نمی‌شود (مشابه Claude Code، همان‌طور که در [#60](https://github.com/ayghri/i-have-adhd/pull/60) آزمایش شده است).

### همیشه فعال (اختیاری)

بلوک زیر را به فایل `.github/copilot-instructions.md` در پروژه اضافه کنید (Copilot آن را در هر چت می‌خواند):

```markdown
## Output style

The reader has ADHD. Shape every response so it can be acted on:

1. Lead with the answer or next action: command, path, or snippet first.
2. Number multi-step work; one bounded action per step.
3. End with one next action doable in under two minutes.
4. Finish the current issue before raising a new one.
5. Restate progress each turn ("step 3 of 5 done").
6. Give time estimates in concrete units, never "a bit".
7. After a change, show what now works.
8. Errors: state location, cause, and fix. No drama.
9. Cap lists to 5 items.
10. No preamble, no recaps, no closers.

Exceptions: explain fully when asked to explain. Confirm before destructive actions. After three failed fixes, stop and name the doubtful assumption. If the request is ambiguous, ask one short question.
```

</details>

<details>
<summary><strong>Hermes</strong></summary>

### نصب

```bash
hermes skills install marcelcorrea-stark/tenho-tdah/skills/tenho-tdah
```

دستور `/tenho-tdah` را تایپ کنید. این مهارت در `~/.hermes/skills/` نصب شده و به عنوان یک دستور اسلش در شروع نشست بعدی در دسترس قرار می‌گیرد.

اگر ترجیح می‌دهید ابتدا مرور کنید؟ این ریپازیتوری را به عنوان منبع مهارت (یک "tap") اضافه کنید، سپس جستجو و نصب کنید:

```bash
hermes skills tap add marcelcorrea-stark/tenho-tdah
hermes skills search tdah
hermes skills install marcelcorrea-stark/tenho-tdah/skills/tenho-tdah
```

### بررسی صحت نصب

```bash
hermes skills list
```

### به‌روزرسانی

```bash
hermes skills update tenho-tdah
```

### حذف نصب

```bash
hermes skills uninstall tenho-tdah
```

یا برای حذف کامل منبع نیز: `hermes skills tap remove marcelcorrea-stark/tenho-tdah`.

### همیشه فعال (اختیاری)

این خطوط را به فایل `AGENTS.md` در دایرکتوری کاری خود (Hermes آن را برای هر دایرکتوری کاری بارگذاری می‌کند) یا به فایل شخصیت `SOUL.md` برای هر نشست اضافه کنید:

```markdown
## Output style

The reader has ADHD. Shape every response so it can be acted on:

1. Lead with the answer or next action: command, path, or snippet first.
2. Number multi-step work; one bounded action per step.
3. End with one next action doable in under two minutes.
4. Finish the current issue before raising a new one.
5. Restate progress each turn ("step 3 of 5 done").
6. Give time estimates in concrete units, never "a bit".
7. After a change, show what now works.
8. Errors: state location, cause, and fix. No drama.
9. Cap lists to 5 items.
10. No preamble, no recaps, no closers.

Exceptions: explain fully when asked to explain. Confirm before destructive actions. After three failed fixes, stop and name the doubtful assumption. If the request is ambiguous, ask one short question.
```

</details>

<details>
<summary><strong>Kimi Code CLI</strong></summary>

### نصب

یک نشست Kimi Code شروع کنید، سپس:

1. دستور `/plugins` را اجرا کنید.
2. گزینه **Custom** را انتخاب کنید.
3. آدرس `https://github.com/marcelcorrea-stark/tenho-tdah` را پیست کرده و `Enter` را بزنید.
4. گزینه **Trust and install** را انتخاب کنید.

برای فراخوانی صریح مهارت، از دستور اسلش `/skill:tenho-tdah` استفاده کنید.

### به‌روزرسانی

در نشست Kimi Code، دستور `/plugins` را بزنید، نشانگر را روی **Tenho TDAH** ببرید و کلید `R` را فشار دهید.

### حذف نصب

در نشست Kimi Code، دستور `/plugins` را بزنید، نشانگر را روی **Tenho TDAH** ببرید و کلید `D` را فشار دهید.

</details>

<details>
<summary><strong>OpenCode</strong></summary>

پلاگین از OpenCode V1 **نسخه 1.18.29 و جدیدتر** و V2 پشتیبانی می‌کند. مهارت و دستور `/tenho-tdah` را ثبت می‌کند و حالت همیشه فعال را به‌صورت اختیاری ارائه می‌دهد. نسخه‌های قدیمی‌تر V1 باید ارتقا یابند یا از پلاگین نسخه قبلی مهارت استفاده کنند.

### نصب

برای استفاده در همه پروژه‌ها:

```bash
git clone https://github.com/marcelcorrea-stark/tenho-tdah ~/.config/opencode/vendor/tenho-tdah
mkdir -p ~/.config/opencode/plugins
cat > ~/.config/opencode/plugins/tenho-tdah.js <<'EOF'
export { default } from '../vendor/tenho-tdah/.opencode/plugins/tenho-tdah.mjs';
EOF
```

برای نصب فعلی V1، ورودی `plugin` را در `opencode.json` نگه دارید. اگر به فایل بارگذار بالا تغییر می‌دهید، آن ورودی را حذف کنید.

یک نشست جدید شروع کنید و `/tenho-tdah` را وارد کنید. قوانین تا زمانی که `parar modo tdah` یا `modo normal` را بگویید فعال می‌مانند.

#### فقط مهارت و دستور (بدون حالت همیشه فعال)

روش دیگر این است که مهارت و دستور را از ریپازیتوری به پوشه‌های سراسری OpenCode کپی کنید:

```bash
mkdir -p ~/.config/opencode/skills/tenho-tdah ~/.config/opencode/commands
cp skills/tenho-tdah/SKILL.md ~/.config/opencode/skills/tenho-tdah/SKILL.md
cp .opencode/command/tenho-tdah.md ~/.config/opencode/commands/tenho-tdah.md
```

### بررسی صحت نصب

OpenCode را اجرا کنید، `/` را وارد کنید و مطمئن شوید `tenho-tdah` در فهرست دستورات دیده می‌شود.

### به‌روزرسانی

```bash
git -C ~/.config/opencode/vendor/tenho-tdah pull
```

در روش نصب با کپی، ریپازیتوری را به‌روزرسانی کرده و هر دو فایل را دوباره کپی کنید.

### حذف نصب

فایل `~/.config/opencode/plugins/tenho-tdah.js` را حذف کنید. در روش نصب با کپی، `~/.config/opencode/skills/tenho-tdah/` و `~/.config/opencode/commands/tenho-tdah.md` را حذف کنید. برای نصب فعلی V1 با تنظیمات، ورودی `plugin` مربوط را حذف کنید.

### همیشه فعال (اختیاری)

به پلاگین نیاز دارد. ساختن فایل پرچم، تمام قوانین را در هر نوبت به پرامپت سیستم اضافه می‌کند:

```bash
touch ~/.config/opencode/.tenho-tdah-always
```

دستور `parar modo tdah` یا `modo normal` از عامل می‌خواهد در نشست جاری به سبک پاسخ معمول برگردد. برای توقف تزریق خودکار، فایل پرچم را حذف کنید:

```bash
rm ~/.config/opencode/.tenho-tdah-always
```

اگر `XDG_CONFIG_HOME` تنظیم شده است، در این مسیرها `~/.config` را با آن پوشه جایگزین کنید.

</details>

<details>
<summary><strong>Pi</strong></summary>

Pi این ریپازیتوری را به عنوان یک بسته بومی کشف می‌کند: پوشه `extensions/` حالت پایدار نشست را فراهم می‌کند و `skills/` نقطه ورود Agent Skills را در دسترس نگه می‌دارد.

### نصب

```bash
pi install https://github.com/marcelcorrea-stark/tenho-tdah
```

یک نشست جدید Pi شروع کنید. حالت دوستدار ADHD را برای نشست جاری تغییر دهید:

```text
/tenho-tdah
```

پاورقی (footer) تا زمانی که این حالت فعال است، `● TDAH ATIVO` را نشان می‌دهد. برای خاموش کردن، مجدداً همین دستور را اجرا کنید یا صریحاً بنویسید:

```text
/tenho-tdah on
/tenho-tdah off
parar modo tdah
```

مانند هوک Claude Code، این افزونه مجموعه قوانین را یک‌بار به مکالمه اضافه می‌کند (به جای بازنویسی پرامپت سیستم در هر درخواست) و پس از فشرده‌سازی (compaction) که آن را حذف می‌کند، مجدداً اضافه می‌کند.

دستور Agent Skills موجود نیز به عنوان یک نام مستعار در دسترس است:

```text
/skill:tenho-tdah
```

شروع یک نشست جدید Pi با این حالت به صورت پیش‌فرض فعال:

```bash
pi --tdah
```

### بررسی صحت نصب

```bash
pi list
```

تأیید کنید که بسته GitHub در لیست است، سپس `/tenho-tdah` را تایپ کرده و بررسی کنید که `● TDAH ATIVO` در پاورقی ظاهر شود.

### به‌روزرسانی

```bash
pi update https://github.com/marcelcorrea-stark/tenho-tdah
```

یا همه بسته‌های Pi که پین نشده‌اند را با `pi update --extensions` به‌روزرسانی کنید.

### حذف نصب

```bash
pi remove https://github.com/marcelcorrea-stark/tenho-tdah
```

### همیشه فعال (اختیاری)

یک پرچم در دایرکتوری پیکربندی عامل Pi ایجاد کنید:

```bash
touch ~/.pi/agent/.tenho-tdah-always
```

این افزونه پرچم را در هر نشست جدید، از سر گرفته شده، شاخه‌دار شده یا بارگذاری مجدد بررسی می‌کند. یک انتخاب ذخیره‌شده برای نشست جاری بر این پیش‌فرض ارجحیت دارد، بنابراین `parar modo tdah` آن نشست را غیرفعال نگه می‌دارد.

بازگشت به حالت فعال‌سازی دستی:

```bash
rm ~/.pi/agent/.tenho-tdah-always
```

### فایل پیکربندی (اختیاری)

فایل `~/.pi/agent/tenho-tdah.json` را در دایرکتوری پیکربندی عامل Pi ایجاد کنید:

```json
{
  "alwaysOn": true,
  "hideStatus": true
}
```

- `alwaysOn`: هر نشست را با قوانین فعال شروع می‌کند — مشابه فایل پرچم `.tenho-tdah-always` که همچنان کار می‌کند.
- `hideStatus`: ورودی نوار وضعیت `● TDAH ATIVO` را مخفی نگه می‌دارد؛ قوانین و دستور `/tenho-tdah` همچنان کار می‌کنند.

این فایل یک‌بار در شروع افزونه خوانده می‌شود، بنابراین پس از تغییر آن، Pi را مجدداً راه‌اندازی کنید. یک انتخاب ذخیره‌شده برای نشست جاری بر `alwaysOn` ارجحیت دارد، بنابراین `parar modo tdah` آن نشست را غیرفعال نگه می‌دارد.

اگر متغیر `PI_CODING_AGENT_DIR` تنظیم شده باشد، فایل `.tenho-tdah-always` را در آن دایرکتوری قرار دهید. پس از تغییر پرچم، دستور `/reload` را اجرا کنید یا یک نشست جدید شروع کنید.

</details>

<details>
<summary><strong>Oh My Pi (OMP)</strong></summary>

### نصب

```bash
omp plugin marketplace add marcelcorrea-stark/tenho-tdah
omp plugin install --scope user tenho-tdah@tenho-tdah
```

یک نشست جدید OMP شروع کنید و برای تغییر حالت، دستور `/tenho-tdah` را اجرا کنید.

### به‌روزرسانی

```bash
omp plugin marketplace update tenho-tdah
omp plugin upgrade --scope user tenho-tdah@tenho-tdah
```

### حذف نصب

```bash
omp plugin uninstall --scope user tenho-tdah@tenho-tdah
omp plugin marketplace remove tenho-tdah
```

</details>

<details>
<summary><strong>Qwen Code</strong></summary>

### نصب

```bash
qwen extensions install marcelcorrea-stark/tenho-tdah
```

Qwen Code از مخفف GitHub پشتیبانی می‌کند و ریپازیتوری را به عنوان یک افزونه بومی نصب می‌کند. این افزونه مهارت را در پوشه `skills/` کشف می‌کند.

برای فراخوانی صریح مهارت، دستور `/tenho-tdah` را تایپ کنید. نصب افزونه تا زمانی که مهارت فراخوانی نشود، خروجی را تغییر نمی‌دهد.

### بررسی صحت نصب

```bash
qwen extensions list
```

سپس یک نشست جدید Qwen Code شروع کرده و اجرا کنید:

```text
/skills
```

تأیید کنید که `tenho-tdah` در لیست ظاهر می‌شود.

### به‌روزرسانی

```bash
qwen extensions update tenho-tdah
```

### حذف نصب

```bash
qwen extensions uninstall tenho-tdah
```

</details>

<details>
<summary><strong>Zed</strong></summary>

عامل (Agent) در Zed مهارت‌های عامل را به صورت بومی و با همان فرمت `SKILL.md` بدون نیاز به تبدیل می‌خواند. توجه داشته باشید که "Rules" قدیمی Zed در کنار دستورالعمل‌های `AGENTS.md` با Skills جایگزین شده‌اند.

### نصب

در پنل Agent، مدیر مهارت‌ها (Skills manager) را باز کرده و **Create skill from URL** (همچنین در پالت دستورات به عنوان `agent: create skill from url`) را انتخاب کنید، سپس آدرس زیر را پیست کنید:

```text
https://github.com/marcelcorrea-stark/tenho-tdah/blob/main/skills/tenho-tdah/SKILL.md
```

آن را در محدوده **User** برای همه پروژه‌ها، یا در محدوده **Project** برای یک پروژه ذخیره کنید. سپس در پنل Agent دستور `/tenho-tdah` را تایپ کنید.

اگر فایل‌سیستم را ترجیح می‌دهید؟ ریپازیتوری را کلون کرده و پوشه مهارت را در دایرکتوری مهارت‌های کاربر خود رها کنید:

```bash
git clone https://github.com/marcelcorrea-stark/tenho-tdah
mkdir -p ~/.agents/skills
cp -R tenho-tdah/skills/tenho-tdah ~/.agents/skills/
```

### بررسی صحت نصب

مدیر مهارت‌ها را در پنل Agent باز کنید و تأیید کنید که `tenho-tdah` در لیست است. یا `/` را تایپ کنید و تأیید کنید که ظاهر می‌شود.

### به‌روزرسانی

مجدداً از همان URL وارد کنید (بازنویسی می‌شود)، یا پس از `git pull` پوشه را مجدداً کپی کنید.

### حذف نصب

`tenho-tdah` را از مدیر مهارت‌ها حذف کنید، یا `~/.agents/skills/tenho-tdah` را پاک کنید.

### همیشه فعال (اختیاری)

این خطوط را به فایل شخصی `~/.config/zed/AGENTS.md` خود اضافه کنید:

```markdown
## Output style

The reader has ADHD. Shape every response so it can be acted on:

1. Lead with the answer or next action: command, path, or snippet first.
2. Number multi-step work; one bounded action per step.
3. End with one next action doable in under two minutes.
4. Finish the current issue before raising a new one.
5. Restate progress each turn ("step 3 of 5 done").
6. Give time estimates in concrete units, never "a bit".
7. After a change, show what now works.
8. Errors: state location, cause, and fix. No drama.
9. Cap lists to 5 items.
10. No preamble, no recaps, no closers.

Exceptions: explain fully when asked to explain. Confirm before destructive actions. After three failed fixes, stop and name the doubtful assumption. If the request is ambiguous, ask one short question.
```

</details>

<details>
<summary><strong>Cursor، Amp و هر ابزار مهارت‌محور دیگر</strong></summary>

با هر ابزاری که مهارت‌های عامل را می‌خواند کار می‌کند. `-a <agent>` را با ابزار خود جایگزین کنید.

### نصب

```bash
npx skills add marcelcorrea-stark/tenho-tdah                  # فقط این فضای کاری
npx skills add marcelcorrea-stark/tenho-tdah -g               # همه پروژه‌ها
npx skills add marcelcorrea-stark/tenho-tdah -a cursor -y     # فقط یک عامل خاص
npx skills add marcelcorrea-stark/tenho-tdah -a opencode -y
```

در چت جدید عامل، دستور `/tenho-tdah` را تایپ کنید.

بدون استفاده از CLI، پوشه مهارت را در هر مسیری که عامل شما اسکن می‌کند کپی کنید:

```bash
git clone https://github.com/marcelcorrea-stark/tenho-tdah
mkdir -p ~/.cursor/skills     # برای Cursor. برای OpenCode از .agents/skills یا مسیر خاص عامل خود استفاده کنید
cp -R tenho-tdah/skills/tenho-tdah ~/.cursor/skills/
```

### بررسی صحت نصب

```bash
npx skills list
npx skills ls -g    # اگر به صورت سراسری نصب شده است
```

### به‌روزرسانی

```bash
npx skills update tenho-tdah
npx skills update -g    # اگر به صورت سراسری نصب شده است
```

### حذف نصب

```bash
npx skills remove tenho-tdah
npx skills remove tenho-tdah -g    # اگر به صورت سراسری نصب شده است
```

### همیشه فعال (اختیاری)

این متن را در فایل قوانین پایدار عامل خود پیست کنید. برای Cursor: **Settings → Rules → User Rules**، یا یک قانون پروژه در `.cursor/rules/` با `alwaysApply: true`. برای OpenCode: `~/.config/opencode/AGENTS.md`.

```markdown
## Output style

The reader has ADHD. Shape every response so it can be acted on:

1. Lead with the answer or next action: command, path, or snippet first.
2. Number multi-step work; one bounded action per step.
3. End with one next action doable in under two minutes.
4. Finish the current issue before raising a new one.
5. Restate progress each turn ("step 3 of 5 done").
6. Give time estimates in concrete units, never "a bit".
7. After a change, show what now works.
8. Errors: state location, cause, and fix. No drama.
9. Cap lists to 5 items.
10. No preamble, no recaps, no closers.

Exceptions: explain fully when asked to explain. Confirm before destructive actions. After three failed fixes, stop and name the doubtful assumption. If the request is ambiguous, ask one short question.
```
</details>

## نحوه فعال‌سازی

1. **نصب‌شده، اما فراخوانی‌نشده.** در Claude Code، Qwen Code و Codex، تا زمانی که مهارت را صریحاً فراخوانی نکنید، هیچ اتفاقی نمی‌افتد. Claude Code و Qwen Code گزینه `disable-model-invocation: true` را در `SKILL.md` رعایت می‌کنند؛ Codex نیز `policy.allow_implicit_invocation: false` را در `agents/openai.yaml` رعایت می‌کند. سایر ابزارها ممکن است توضیحات هر مهارت را در شروع بارگذاری کرده و خودشان آن را فعال کنند.
2. **شما آن را صریحاً فراخوانی می‌کنید.** در Claude Code یا Qwen Code دستور `/tenho-tdah`، یا در Codex دستور `$tenho-tdah` را تایپ کنید. قوانین برای آن نشست فعال می‌مانند. با "parar modo tdah" یا "modo normal" خاموش می‌شوند.
3. **شما فایل `~/.claude/.tenho-tdah-always` را لمس می‌کنید** (در Claude Code). یک هوک `SessionStart` مجموعه قوانین کامل را از پیام اول، در هر نشست بارگذاری می‌کند.
4. **شما قطعه کد همیشه فعال بالا را اضافه می‌کنید** (در سایر ابزارها). قوانین اصلی را در زمینه پایدار عامل شما نگه می‌دارد.

در Claude Code، Qwen Code و Codex، حد وسطی وجود ندارد: اگر آن را روشن نکرده‌اید، خاموش است.

## عیب‌یابی

**دستور `/tenho-tdah` در تکمیل خودکار نیست.** عامل را مجدداً راه‌اندازی کنید. فهرست پلاگین‌ها در شروع خوانده می‌شود.

**پرچم همیشه فعال اثری ندارد.** پلاگین را به‌روزرسانی کنید (`claude plugin marketplace update tenho-tdah` و سپس `claude plugin update tenho-tdah@tenho-tdah`) و مجدداً راه‌اندازی کنید. هوک‌ها در شروع خوانده می‌شوند و پرچم به نسخه‌ای از پلاگین نیاز دارد که `hooks/hooks.json` را ارائه می‌دهد.

**دستور `claude plugin marketplace add` با خطا مواجه می‌شود.** از فرم `owner/repo` استفاده کنید. یک مسیر محلی باید به ریشه ریپازیتوری اشاره کند، نه به `.claude-plugin/`.

**نصب شده اما پاسخ‌ها همچنان مقدمه‌چینی می‌کنند.** یک نشست جدید باز کنید. اگر همچنان انحراف وجود داشت، عبارت‌بندی را در `skills/tenho-tdah/SKILL.md` سخت‌گیرانه‌تر کنید.

**قوانین متفاوتی می‌خواهید.** فورک کنید، `skills/tenho-tdah/SKILL.md` را ویرایش کنید، سپس نسخه خود را جایگزین کنید:

```bash
claude plugin uninstall tenho-tdah            # ابتدا نسخه اصلی را حذف کنید:
claude plugin marketplace remove tenho-tdah   # نام فورک و نسخه اصلی هر دو یکسان است
claude plugin marketplace add <your-username>/tenho-tdah
claude plugin install tenho-tdah@tenho-tdah
```

مجدداً راه‌اندازی کنید، سپس `/tenho-tdah` را مجدداً فراخوانی کنید.

**مهارت پس از `npx skills add` ناپدید است.** یک چت جدید با عامل شروع کنید. مهارت‌ها در شروع نشست فهرست‌بندی می‌شوند. تأیید کنید که پوشه در جایی که عامل اسکن می‌کند قرار گرفته است (`~/.cursor/skills/` برای Cursor، `.agents/skills/` برای OpenCode) و اینکه `name` در frontmatter با نام پوشه مطابقت دارد.
