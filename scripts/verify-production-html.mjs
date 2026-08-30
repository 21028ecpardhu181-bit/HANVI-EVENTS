import fs from 'fs';
import path from 'path';

const PROHIBITED_PATTERNS = [
  { name: 'Unverified Founder (A.Chitra Kala)', pattern: /Chitra/i },
  { name: 'Old Address (Jagannaickpur)', pattern: /Jagannaickpur/i },
  { name: 'Old Pincode (533002)', pattern: /533002/ },
  { name: 'Absolute Claim (zero delays)', pattern: /zero\s+delays/i },
  { name: 'Absolute Claim (flawless)', pattern: /flawless/i },
  { name: 'Superlative Claim (rated #1)', pattern: /rated\s+(?:#1|no\.?\s*1|number\s*1)/i },
  { name: 'Unverified Stat (500+)', pattern: /500\+\s+(?:events|celebrations|weddings)/i },
  { name: 'Unverified Stat (1000+)', pattern: /1(?:,|0)00\+\s+(?:happy|families|clients)/i },
];

function scanDirectory(dir, fileList = []) {
  if (!fs.existsSync(dir)) return fileList;
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      scanDirectory(fullPath, fileList);
    } else if (file.endsWith('.html') || file.endsWith('.rsc')) {
      fileList.push(fullPath);
    }
  }
  return fileList;
}

function verifyBuildOutput() {
  const appOutputDir = path.join(process.cwd(), '.next', 'server', 'app');
  console.log(`\n🔍 Verifying Next.js App Router output in ${appOutputDir}...`);

  const files = scanDirectory(appOutputDir);
  console.log(`Found ${files.length} compiled HTML/RSC files to audit.`);

  let violations = 0;

  for (const file of files) {
    const content = fs.readFileSync(file, 'utf8');
    const relative = path.relative(process.cwd(), file);

    for (const check of PROHIBITED_PATTERNS) {
      if (check.pattern.test(content)) {
        console.error(`❌ VIOLATION FOUND in [${relative}]: Matches "${check.name}" (${check.pattern})`);
        violations++;
      }
    }
  }

  if (violations > 0) {
    console.error(`\n🚨 Verification FAILED with ${violations} prohibited content violations.`);
    process.exit(1);
  } else {
    console.log(`\n✅ ALL ${files.length} COMPILED PAGES PASSED CONTENT INTEGRITY AUDIT! Zero prohibited strings.`);
  }
}

verifyBuildOutput();
