const path = require('path');
const fs = require('fs-extra');//importing file system extra module

const metadataPath = path.resolve(__dirname, 'metadata');
fs.ensureDirSync(metadataPath);

for(let i = 101; i < 5778; i++){
    fs.outputJsonSync(
     path.resolve(metadataPath, `${i}.json`), 
     {
        "id": i,
        "name": `Gym Alpha Central #${i}`,
        "description": "Your pass to Gym Alpha headquoters.",
        "image": `https://gymalpha.mypinata.cloud/ipfs/Qmf1B38HZttHxEVPEL3L9Q9BG28RXPBBycZQb9fTZpLqwd/main_img_white${i-100}.jpg`,
        "animation url": `https://gymalpha.mypinata.cloud/ipfs/QmcT97VKky4VyBQimnvJ7LFyWgBYBbeUaXs6p6yNx213cj/main_white${i-100}.mp4`,
        "attributes": [
            {
                "trait_type": "Breed",
                "value": "Common"
            }
        ]
    }
    )
}