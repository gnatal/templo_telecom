import * as fs from "fs";
import * as path from "path";


const buildJsonData = (headers, data) => {
    const jsonData = [];
    data.map(row => {
        const jsonRow = {};
        headers.forEach((header, i) => {
            jsonRow[header] = row[i];
        });
        jsonData.push(jsonRow);
    });
    return jsonData;
}

const readFile =  () => {
    const csvFilePath = path.resolve(__dirname, '../data.csv');
    const fileContent = fs.readFileSync(csvFilePath, { encoding: 'utf-8' });
    const lines = fileContent.split('\n');
    const headers = lines[0].split(',');
    const data = lines.slice(1).filter(line => {
        const lineData = line.split(',');
        return lineData.length === headers.length;
    }).map(line => {
        return line.split(',');
    });

    return buildJsonData(headers, data);
}

export const getUsersData = (req, res) => {

    return res.json(readFile()).status(200);
}