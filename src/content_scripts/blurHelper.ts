export class BlurHelper {
   private style = "";
   private isBlurDataset = "true";
   private isNotBlurDataset = "false";

   constructor(blurValue: number, notepadId: string) {
      this.style = `
         body > *:not(#${notepadId}) {
            filter: blur(${blurValue}px);
         }
      `; 
   }
  
   public blurBody() {
      let stylesheet = document.getElementById("blurStyle");
      if (!stylesheet) {
         stylesheet = document.createElement("style");
         stylesheet.setAttribute("id", "blurStyle");
      }
      stylesheet.innerText = this.style;
      document.head.appendChild(stylesheet);
      stylesheet.dataset.isBlur = this.isBlurDataset;
   }

   public unBlurBody() {
      const stylesheet = document.getElementById("blurStyle");
      if (stylesheet) {
         stylesheet.innerText = "";
         stylesheet.dataset.isBlur = this.isNotBlurDataset;
      }
   }

   public isBodyBlur() {
      const stylesheet = document.getElementById("blurStyle");
      console.log(stylesheet?.dataset.isBlur)
      if (stylesheet?.dataset.isBlur === this.isBlurDataset) {
         return true;
      }
      return false;
   }

   public toggleBlur() {
      if (this.isBodyBlur()) {
         this.unBlurBody();
      } else {
         this.blurBody();
      }
   }
}
