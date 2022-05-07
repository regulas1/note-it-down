export class BlurHelper {
   private blurValue: string;
   private toBlurDivId = "toBlur";
   private toBlurSelector = `#${this.toBlurDivId}`;

   constructor(blurValue: string) {
      this.blurValue = blurValue;
      // this.initialisePage();
   }

   private initialisePage() {
      const toBlur = document.body.appendChild(document.createElement("div"));
      toBlur.setAttribute("id", this.toBlurDivId);

      while (document.body.firstChild !== toBlur && document.body.firstChild)
         toBlur.appendChild(document.body.firstChild);
   }

   private blurBody() {
      // const body = document.querySelector<HTMLElement>(this.toBlurSelector);
      // const body = document.querySelector<HTMLElement>("body > *");
      // if (body) {
      //    body.style.filter = this.blurValue;
      // }
      const style = `
         body > *:not(#notepad) {
            filter: blur(3px);
         }
      `;

      const stylesheet = document.createElement("style");
      stylesheet.setAttribute("id", "blurStyle");
      stylesheet.innerText = style;
      document.head.appendChild(stylesheet);
   }

   private unBlurBody() {
      // const body = document.querySelector<HTMLElement>("body > *");
      // if (body) {
      //    body.style.filter = "";
      // }
      const stylesheet = document.getElementById("blurStyle");
      if (stylesheet) {
         stylesheet.innerText = "";
      }
   }

   private isBodyBlur() {
      // const body = document.querySelector<HTMLElement>("body > *");
      // if (body?.style.filter === this.blurValue) {
      //    return true;
      // }
      // return false;
      const stylesheet = document.getElementById("blurStyle");
      if (stylesheet?.innerText === "") {
         return false;
      }
      return true;
   }

   public toggleBlur() {
      if (this.isBodyBlur()) {
         this.unBlurBody();
      } else {
         this.blurBody();
      }
   }
}