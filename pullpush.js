const exec = require('child_process').exec;

exec('git add *',{cwd: './output/groovy'}, (err, stdout, stderr) => {  
    if (err) {  
      console.error(err);  
      return;  
    }  
    console.log(stdout);  
  });  

exec('git commit -m "add new files"',{cwd: './output/groovy'}, (err, stdout, stderr) => {  
  if (err) {  
    console.error(err);  
    return;  
  }  
  console.log(stdout);  
});

exec('git pull',{cwd: './output/groovy'}, (err, stdout, stderr) => {  
  if (err) {  
    console.error(err);  
    return;  
  }  
  console.log(stdout);  
});

exec('git push',{cwd: './output/groovy'}, (err, stdout, stderr) => {  
  if (err) {  
    console.error(err);  
    return;  
  }  
  console.log(stdout);  
});