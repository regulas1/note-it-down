export class BlurHelper {
   private toBlurDivId = "toBlur";
   private style = "";
   private isBlurDataset = "true";
   private isNotBlurDataset = "false";
   private toBlurSelector = `#${this.toBlurDivId}`;

   constructor(blurValue: string) {
      this.style = `
         body > *:not(#notepad) {
            filter: ${blurValue};
         }
      `; 
   }
  
   private blurBody() {
      let stylesheet = document.getElementById("blurStyle");
      if (!stylesheet) {
         stylesheet = document.createElement("style");
         stylesheet.setAttribute("id", "blurStyle");
      }
      stylesheet.innerText = this.style;
      document.head.appendChild(stylesheet);
      stylesheet.dataset.isBlur = this.isBlurDataset;
   }

   private unBlurBody() {
      const stylesheet = document.getElementById("blurStyle");
      if (stylesheet) {
         stylesheet.innerText = "";
         stylesheet.dataset.isBlur = this.isNotBlurDataset;
      }
   }

   private isBodyBlur() {
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