import fs from 'fs';
import path from 'path';

const envFilePath = path.join(process.cwd(), '.env');
const requiredProperties = [
    { name: 'VITE_ESP_IP', defaultValue: '192.168.1.10' }
];

if (!fs.existsSync(envFilePath)) {
    fs.writeFileSync(envFilePath, '');
    console.log('.env file created');
}else{
    console.log(".env file exists");
}

const envContent = fs.readFileSync(envFilePath, 'utf8');
const envLines = envContent.split('\n');
const envMap = new Map();

envLines.forEach(line => {
    const [key, value] = line.split('=');
    if (key && value !== undefined) {
        envMap.set(key.trim(), value.trim());
    }
});

let updated = false;
requiredProperties.forEach(({ name, defaultValue }) => {
    if (!envMap.has(name)) {
        envMap.set(name, defaultValue);
        updated = true;
    }
});
if (updated) {
    const newEnvContent = Array.from(envMap).map(([key, value]) => `${key}=${value}`).join('\n');
    fs.writeFileSync(envFilePath, newEnvContent + '\n');
    console.log('.env file updated with missing properties');
} else {
    console.log('.env file is up-to-date');
}
