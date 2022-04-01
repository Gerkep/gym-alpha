const path = require('path');
const fs = require('fs-extra');//importing file system extra module

const metadataPath = path.resolve(__dirname, 'metadata');
fs.ensureDirSync(metadataPath);

for(let i = 1; i < 5; i++){
    fs.outputJsonSync(
     path.resolve(metadataPath, `data${i}.json`), 
     {
        "id": i,
        "name": `Gym Alpha Central #${i}`,
        "description": "Your pass to Gym Alpha headquoters.",
        "image": "https://temp-cdn.coniun.io/coniun-pass-thumb.jpeg",
        "animation url": `https://gymalpha.mypinata.cloud/ipfs/QmcT97VKky4VyBQimnvJ7LFyWgBYBbeUaXs6p6yNx213cj/main_blue${i}.mp4`,
        "attributes": [
            {
                "trait_type": "Breed",
                "value": "Mythic"
            }
        ]
    }
    )
}