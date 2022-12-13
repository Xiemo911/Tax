import mongoose from "mongoose";
import State from "../models/State.js";
import Bracket from "../models/Bracket.js";
export default async function getTax(status, income, state) {
    const kk = parseFloat(income);
    const st = await State.findOne({ abbreviation: state});

    const taxB = await Bracket.findOne({
        abbreviation: status,
        "bracket.min": { $lte: kk },
        "bracket.max": { $gte: kk },
      });
  const SB10 = 1100;
  const SB12 = 4047;
  const SB22 = 11143;
  const SB24 = 20814;
  const SB32 = 15728;
  const SB35 = 121406;
  const MB10 = 2200;
  const MB12 = 8094;
  const MB22 = 22286;
  const MB24 = 41628;
  const MB32 = 31456;
  const MB35 = 80937;
  const taxBMin = parseFloat(taxB.bracket.min);
  const taxBRate = parseFloat(taxB.rate / 100)
  const stTaxLow = parseFloat(st.lowestIncomeTaxBracket);
  const stTaxHigh = parseFloat(st.highestIncomeTaxBracket)

  if (taxB.rate == 10 && status == "S" || "MFS") {
    const res = kk * (1 - stTaxLow - taxBRate);
    console.log(res);
  } else if (taxB.rate == 12 && status == "S" || "MFS") {
    const currentTax = (kk - taxBMin) * taxBRate;
    const stTax = kk * stTaxLow;
    const res = kk - currentTax - stTax - SB10;
    console.log(res);
  } else if (taxB.rate == 22 && status == "S" || "MFS") {
    const currentTax = (kk - taxBMin) * taxBRate;
    const stTax = kk * stTaxLow;
    const res = kk - currentTax - stTax - SB10 - SB12;
    console.log(res);
  }else if (taxB.rate == 24 && status == "S" || "MFS") {
    const currentTax = (kk - taxBMin) * taxBRate;
    const stTax = kk * stTaxLow;
    const res = kk - currentTax - stTax - SB10 - SB12 - SB22;
    console.log(res);
}else if (taxB.rate == 32 && status == "S" || "MFS") {
    const currentTax = (kk - taxBMin) * taxBRate;
    const stTax = kk * stTaxHigh;
    const res = kk - currentTax - stTax - SB10 - SB12 - SB22 - SB24;
    console.log(res);
}else if (taxB.rate == 35 && status == "S" || "MFS") {
    const currentTax = (kk - taxBMin) * taxBRate;
    const stTax = kk * stTaxHigh;
    const res = kk - currentTax - stTax - SB10 - SB12 - SB22 - SB24 - SB32;
    console.log(res);
}else if (taxB.rate == 37 && status == "S" || "MFS") {
    const currentTax = (kk - taxBMin) * taxBRate;
    const stTax = kk * stTaxHigh;
    const res = kk - currentTax - stTax - SB10 - SB12 - SB22 - SB24 - SB32 - SB35;
    console.log(res);
}

else if (taxB.rate == 10 && status == "QW" || "MFJ") {
    const res = kk * (1 - stTaxLow - taxBRate);
    console.log(res);
  } else if (taxB.rate == 12 && status == "QW" || "MFJ") {
    const currentTax = (kk - taxBMin) * taxBRate;
    const stTax = kk * stTaxLow;
    const res = kk - currentTax - stTax - MB10;
    console.log(res);
  } else if (taxB.rate == 22 && status == "QW" || "MFJ") {
    const currentTax = (kk - taxBMin) * taxBRate;
    const stTax = kk * stTaxLow;
    const res = kk - currentTax - stTax - MB10 - MB12;
    console.log(res);
  }else if (taxB.rate == 24 && status == "QW" || "MFJ") {
    const currentTax = (kk - taxBMin) * taxBRate;
    const stTax = kk * stTaxLow;
    const res = kk - currentTax - stTax - MB10 - MB12 - MB22;
    console.log(res);
}else if (taxB.rate == 32 && status == "QW" || "MFJ") {
    const currentTax = (kk - taxBMin) * taxBRate;
    const stTax = kk * stTaxHigh;
    const res = kk - currentTax - stTax - MB10 - MB12 - MB22 - MB24;
    console.log(res);
}else if (taxB.rate == 35 && status == "QW" || "MFJ") {
    const currentTax = (kk - taxBMin) * taxBRate;
    const stTax = kk * stTaxHigh;
    const res = kk - currentTax - stTax - MB10 - MB12 - MB22 - MB24 - MB32;
    console.log(res);
}else if  (taxB.rate == 37 && status == "QW" || "MFJ") {
    const currentTax = (kk - taxBMin) * taxBRate;
    const stTax = kk * stTaxHigh;
    const res = kk - currentTax - stTax - MB10 - MB12 - MB22 - MB24 - MB32 - MB35;
    console.log(res);
}else {
return ""

}}
