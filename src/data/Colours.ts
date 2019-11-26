import {
} from 'lodash'

import { 
  ColourModel,
  VendorEnum,
  TypeEnum
} from '../model'


export const Colours = {
  'Ionrach Skin':new ColourModel(VendorEnum['Citadel'],TypeEnum['Base'],'Ionrach Skin'),
  'Wraith Bone':new ColourModel(VendorEnum['Citadel'],TypeEnum['Base'],'Wraith Bone'),
  'Rakarth Flesh':new ColourModel(VendorEnum['Citadel'],TypeEnum['Base'],'Rakarth Flesh'),

}

