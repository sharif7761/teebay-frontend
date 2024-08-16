import * as Yup from 'yup';

const ProductEditSchema = Yup.object({
    title: Yup.string().required('Title is required'),
    categories: Yup.array().of(Yup.string()).required('At least one category is required'),
    description: Yup.string().required('Description is required'),
    purchasePrice: Yup.number().required('Purchase Price is required').positive('Must be positive'),
    rentPrice: Yup.number().positive('Must be positive'),
    rentType: Yup.string(),
});

export default ProductEditSchema;