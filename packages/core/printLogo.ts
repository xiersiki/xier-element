const PROD = process.env.NODE_ENV === "production";
const DEV = process.env.NODE_ENV === "development";
export default function () {
    if (PROD) {
        const logo = `
______________________________________________________________________________________
  
____  ___.__                       ___________.__                                __   
\   \/  /|__| ___________          \_   _____/|  |   ____   _____   ____   _____/  |_ 
 \     / |  |/ __ \_  __ \  ______  |    __)_ |  | _/ __ \ /     \_/ __ \ /    \   __\
 /     \ |  \  ___/|  | \/ /_____/  |        \|  |_\  ___/|  Y Y  \  ___/|   |  \  |  
/___/\  \|__|\___  >__|            /_______  /|____/\___  >__|_|  /\___  >___|  /__|  
      \_/        \/                        \/           \/      \/     \/     \/      
                                             
_______________________________________________________________________________________
                                      author:xier
  `;

        const rainbowGradient = `
  background: linear-gradient(135deg, orange 60%, cyan);
  background-clip: text;
  color: transparent;
  font-size: 16px; 
  line-height: 1;
  font-family: monospace;
  font-weight: 600;
  `;

        console.info(`%c${logo}`, rainbowGradient);
    } else if (DEV) {
        console.log("[xier-element]:dev mode...");
    }
}
