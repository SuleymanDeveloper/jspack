import { exec } from "child_process";

const args = process.argv;

const commit = args.splice(2).join(" ");

exec(`git add . && git commit -m "${commit}" && git push origin main`, (err, stdout, stdin) => {
    if(err){ console.log(err); return}
    console.log("stdout: ", stdout);
    console.log("stdin: ", stdin);
})