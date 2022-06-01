const fs = require('fs');
fs.unlink('firstFile.txt',(error)=>
{
    if(error)
    {
        console.log(error);
    }
    else 
    {
        console.log(`successfully`);
    }
})