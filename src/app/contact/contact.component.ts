import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit{
  ngOnInit(): void {
    console.log("ngOnInitIsCalled");
    const submitBtn = document.getElementById('submitBtn') as HTMLButtonElement;
    const formInputs = document.querySelectorAll(
      '.form-group input, .form-group textarea'
    );
    console.log("formInputs", formInputs);
    console.log("submitBtn", submitBtn);

    function checkFormInputs() {
      console.log("checkFormInputs is called");
      let allFilled = true;
      formInputs.forEach((input: HTMLInputElement) => {
        if (input.value.trim() === '') {
          allFilled = false;
        }
      });


      if (allFilled) {
        submitBtn.classList.add('form-filled');
      } else {
        submitBtn.classList.remove('form-filled');
      }
    }

    formInputs.forEach((input: HTMLInputElement) => {
      input.addEventListener('input', checkFormInputs);
    });
  }
}
