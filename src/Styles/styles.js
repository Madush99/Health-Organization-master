import { StyleSheet } from "react-native";
import {form} from './form.js';
import { headings } from "./heading.js";
import { list } from "./listContainer.js";
import { validationText } from "./validationText.js";

export default StyleSheet.create({

    ...form,
    ...headings,
    ...list,
    ...validationText
});


