export class BlurHelper {
   private blurValue: string;
   private toBlurDivId = "toBlur";
   private toBlurSelector = `#${this.toBlurDivId}`;

   constructor(blurValue: string) {
      this.blurValue = blurValue;
      this.initialisePage();
   }

   private initialisePage() {
      const toBlur = document.body.appendChild(document.createElement("div"));
      toBlur.setAttribute("id", this.toBlurDivId);

      while (document.body.firstChild !== toBlur && document.body.firstChild)
         toBlur.appendChild(document.body.firstChild);
   }

   private blurBody() {
      const body = document.querySelector<HTMLElement>(this.toBlurSelector);
      if (body) {
         body.style.filter = this.blurValue;
      }
   }

   private unBlurBody() {
      const body = document.querySelector<HTMLElement>(this.toBlurSelector);
      if (body) {
         body.style.filter = "";
      }
   }

   private isBodyBlur() {
      const body = document.querySelector<HTMLElement>(this.toBlurSelector);
      if (body?.style.filter === this.blurValue) {
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