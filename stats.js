const fs = require("fs");

const inputFile = "10000-common-passwords.csv";
const outputFile = "statistics.csv";
const delimiter = ",";

const passLength = {
  1 : 0,
  2 : 0,
  3 : 0,
  4 : 0,
  5 : 0,
  6 : 0,
  7 : 0,
  8 : 0,
  9 : 0,
  10 : 0,
  11 : 0,
  12 : 0,
  13 : 0,
  14 : 0,
  15 : 0,
  16 : 0,
  17 : 0,
  18 : 0,
  19 : 0,
  20 : 0,


}
  
function deleteExistingOutputFile() {
  if (fs.existsSync(outputFile)) {
    fs.unlinkSync(outputFile);
    console.log("File Deleted")
  }
}

function processData() {
  const data = fs.readFileSync(inputFile, "utf-8");
  const lines = data.split(/\n/);

  for (let line of lines) {
   let element = line.split(delimiter);
    //console.log(element);
    let length = element[1].length
    if (length in passLength){
      passLength[length] += 1;
    }else {
      passLength[length] = 1;
    }
  }
  return passLength;
}

function savePassLength(freq){
  for (const length in freq){
   const content = (`Char ${length} : Count ${freq[length]} \n`)
   fs.appendFileSync(outputFile, content, "utf-8" );
  }

}

// Main execution
deleteExistingOutputFile(); 
const results = processData();
savePassLength(results);
