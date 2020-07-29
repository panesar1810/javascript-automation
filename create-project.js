const { exec } = require('child_process');

const lib = process.argv[2];
const name = process.argv[3];

const openvs = `code ${name}`;
let path, project;

if (lib === 'angular') {
    path = 'development/angular';
    project = `ng new ${name} --routing`;
}
if (lib === 'react') {
    path = 'development/react';
    project = `npx create-react-app ${name}`;
}

const cmd = `cd ${path} && ${project} && ${openvs}`;

exec(cmd, (error, stdout, stderr) => {
    if (error) 
        console.log(`error: ${error.message}`);
    if (stderr)  
        console.log(`stderr: ${stderr}`);
        
    console.log(`stdout: ${stdout}`);
});
