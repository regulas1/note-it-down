export const blurBodyExceptNotepad = (blurValue: number, notepadId: string) => {
	const style = `
      body > *:not(#${notepadId}) {
         filter: blur(${blurValue}px);
      }
   `;

   let stylesheet = document.getElementById("blurStyle");
   if (!stylesheet) {
      stylesheet = document.createElement("style");
      stylesheet.setAttribute("id", "blurStyle");
	}
	
   stylesheet.innerText = style;
   document.head.appendChild(stylesheet);
};

export const unBlurBody = () => {
	const stylesheet = document.getElementById("blurStyle");
   if (stylesheet) {
      stylesheet.innerText = "";
   }
}