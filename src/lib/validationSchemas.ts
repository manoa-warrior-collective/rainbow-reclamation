import * as Yup from 'yup';

export const AddLostItemSchema = Yup.object({
  name: Yup.string().required('Item name is required'),
  description: Yup.string().required('Description is required'),
  category: Yup.string()
    .oneOf(['ELECTRONICS', 'CLOTHING', 'ACCESSORIES', 'DAILY_NECESSITIES', 'OTHER'])
    .required('Category is required'),
  building: Yup.string().oneOf(['BIL', 'KELL', 'POST', 'CAMPUS_CENTER', 'OTHER']).required('Building is required'),
  location: Yup.string().required('Specific location is required'),
  date: Yup.string().required('Date lost is required'),
  imageUrl: Yup.string().url('Must be a valid URL').optional(),
  contactInfo: Yup.string().required('Contact information is required'),
  reportedBy: Yup.string().optional(),
  bountyStatus: Yup.boolean().optional(),
  bountyReward: Yup.number().positive('Bounty must be positive').optional(),
});

export const AddFoundItemSchema = Yup.object({
  name: Yup.string().required('Item name is required'),
  description: Yup.string().required('Description is required'),
  category: Yup.string()
    .oneOf(['ELECTRONICS', 'CLOTHING', 'ACCESSORIES', 'DAILY_NECESSITIES', 'OTHER'])
    .required('Category is required'),
  building: Yup.string().oneOf(['BIL', 'KELL', 'POST', 'CAMPUS_CENTER', 'OTHER']).required('Building is required'),
  location: Yup.string().required('Specific location is required'),
  date: Yup.string().required('Date found is required'),
  imageUrl: Yup.string().url('Must be a valid URL').optional(),
  contactInfo: Yup.string().required('Contact information is required'),
  reportedBy: Yup.string().optional(),
  bountyStatus: Yup.boolean().optional(),
  bountyReward: Yup.number().positive('Bounty must be positive').optional(),
});
