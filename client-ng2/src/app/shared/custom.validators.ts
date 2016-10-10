import { Injectable } from '@angular/core'
import {FormControl} from '@angular/forms';

@Injectable()
export class CustomValidators {

	validateDailyBudget(c: FormControl): { [s: string]: boolean } {
		let _REGEXP = /^[+]?\d*\.?\d*$/;

	  return _REGEXP.test(c.value) ? null : 
	  { validateDailyBudget: false }
	}
	
	validateWeight(c: FormControl): { [s: string]: boolean } {
		let _REGEXP = /^[+]?[1-9]+\.?\d*$/;

	  return _REGEXP.test(c.value) ? null : 
		  { validateWeight: false }
	}

	validateMinBid(c: FormControl): { [s: string]: boolean } {
		let _REGEXP = /(null)|(undefined)|(^[+]?\d*\.?\d*$)/;
		console.log(c.value);
		return _REGEXP.test(c.value) ? null :
			{ validateMinBid: false }
	}
	validateMaxBid(c: FormControl): { [s: string]: boolean } {
		let _REGEXP = /(null)|(undefined)|(^[+]?\d*\.?\d*$)/;

		return _REGEXP.test(c.value) ? null :
			{ validateMaxBid: false }
	}

	validateUrl(c: FormControl): { [s: string]: boolean } {
		let _REGEXP = /(^$)|(undefined)|((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/;
		
		return _REGEXP.test(c.value) ? null :
			{ validateUrl: false }
	}

	validateName(c: FormControl): { [s: string]: boolean } {
		console.log("Validator name " + c.value);
		let _REGEXP = /^[\w -]+$/;
		return _REGEXP.test(c.value) ? null :
			{ validateName: false}
	}

	validateMinProductCount(c: FormControl): { [s: string]: boolean } {
		//integer above 0
		let _REGEXP = /(^[+]?([1-9][0-9]+|[1-9])$)/;
		console.log("MinProdCount: " + c.value);
		return _REGEXP.test(c.value) ? null :
			{ validateMinProductCount: false }
	}

	validateMaxProductCount(c: FormControl): { [s: string]: boolean } {
		//Null or inteher above 1
		let _REGEXP = /(null)|(undefined)|(^[+]?([1-9][0-9]+|[2-9])$)/;	
		console.log("MaxProdCount: " + c.value);
		return _REGEXP.test(c.value) ? null :
			{ validateMaxProductCount: false }
	}

	validateMerchantId(c: FormControl): { [s: string]: boolean } {
		//integer above 0
		let _REGEXP = /(^[+]?([1-9][0-9]+|[1-9])$)/;
		console.log("MaxProdCount: " + c.value);
		return _REGEXP.test(c.value) ? null :
			{ validateMerchantId: false }
	}
	validateMerchantCountry(c: FormControl): { [s: string]: boolean } {
		//integer above 0
		let _REGEXP = /(^[A-Z]*$)/;
		console.log("MaxProdCount: " + c.value);
		return _REGEXP.test(c.value) ? null :
			{ validateMerchantCountry: false }
	}

	validateBidderWeight(c: FormControl): { [s: string]: boolean } {
		let _REGEXP = /(^$)|(null)|(undefined)|(^\+?(\d*[1-9]\d*\.?|\d*\.\d*[1-9]\d*)$)/;
		//let _REGEXP = /(^$)|(null)|(undefined)|^[+]?[1-9]+\.?\d*$/;
		console.log("validateBidderWeight: " + c.value);
		return _REGEXP.test(c.value) ? null :
			{ validateBidderWeight: false }
	}

	bidderLearningRate(c: FormControl): { [s: string]: boolean } {
		let _REGEXP = /(^$)|(null)|(undefined)|(^(0(\.[0-9]+)?|(1(\.0+)|1)?)$)/;
		console.log(c.value);
		return _REGEXP.test(c.value) ? null :
			{ bidderLearningRate: false }
	}

	bidderTargetCPC(c: FormControl): { [s: string]: boolean } {
		let _REGEXP = /(^$)|(null)|(undefined)|(^\+?(\d*[1-9]\d*\.?|\d*\.\d*[1-9]\d*)$)/;
		// /(^$)|(null)|(undefined)|(^[+]?(0(\.[0-9]+)?)|([1-9]+\.?\d*)$)/;
		console.log(c.value);
		return _REGEXP.test(c.value) ? null :
			{ bidderTargetCPC: false }
	}


}

