
let resumeDetailsBtn = document.getElementById("resume_detailsbtn")
let resumeSortBtn = document.getElementById("resume_sortbtn")
let resumeDetails = document.getElementById("resume_details")
let resumeShort = document.getElementById("resume_short")

let uploadResumeBtn = document.getElementById("upload_resumeBtn")
let upload_resume = document.getElementById("upload_resume")

resumeDetailsBtn.addEventListener("click", function(){
    resumeDetails.style.cssText = "display: block"
    resumeShort.style.cssText = "display: none"
    upload_resume.style.cssText = "display: none"
    this.classList.add("activeTab")
    resumeSortBtn.classList.remove("activeTab")
    uploadResumeBtn.classList.remove("activeTab")
})

resumeSortBtn.addEventListener("click", function(){
    resumeDetails.style.cssText = "display: none"
    upload_resume.style.cssText = "display: none"
    resumeShort.style.cssText = "display: block"
    this.classList.add("activeTab")
    resumeDetailsBtn.classList.remove("activeTab")
    uploadResumeBtn.classList.remove("activeTab")
})

uploadResumeBtn.addEventListener("click", function(){
    resumeDetails.style.cssText = "display: none"
    resumeShort.style.cssText = "display: none"
    upload_resume.style.cssText = "display: block"
    this.classList.add("activeTab")
    resumeDetailsBtn.classList.remove("activeTab")
    resumeSortBtn.classList.remove("activeTab")
})

// resume pdf
const pdfFileInput = document.getElementById('pdf-file-input');
const pdfPreview = document.getElementById('pdf-preview');

pdfFileInput.addEventListener('change', () => {
  const file = pdfFileInput.files[0];
  const reader = new FileReader();
  
  reader.addEventListener('load', () => {
    const pdfDataUrl = reader.result;
    pdfPreview.innerHTML = `<embed src="${pdfDataUrl}" type="application/pdf" />`;
  });
  
  reader.readAsDataURL(file);
});
