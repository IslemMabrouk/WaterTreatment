import { UntypedFormGroup } from '@angular/forms';
// custom validator to check that two fields match
export function MustMatch(controlName: string, matchingControlName: string) 
{
 return (formGroup: UntypedFormGroup) => {
 const control = formGroup.controls[controlName];
 const matchingControl = formGroup.controls[matchingControlName];
 // set error on matchingControl if validation fails
 if (control.value !== matchingControl.value) {
 matchingControl.setErrors({ mustMatch: true });
 } else {
 matchingControl.setErrors(null);
 }
 }
}