import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Select,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import { object, string, number, date } from "yup";

const opcionesCategorias = [
  "Leche",
  "Crema de leche",
  "Pan",
  "Queso",
  "Helados",
  "Yogur",
  "Pasteles",
  "Postres",
];
const opcionesMarca = [
  "Alquería",
  "Colanta",
  "Bimbo",
  "Alpina",
  "Parmalat",
  "La Pradera",
  "Panadería Santa Elena",
];

let Schema = object({
  name: string().required("este campo es obligatorio"),
  price: number().required("este campo es obligatorio"),
  category: string()
    .required("Debes seleccionar una opción")
    .oneOf(opcionesCategorias, "La opción seleccionada no es válida"),
  description: string().required("este campo es obligatorio"),
  brand: string()
    .required("Debes seleccionar una opción")
    .oneOf(opcionesMarca, "La opción seleccionada no es válida"),
  date: date()
    .required("Debes seleccionar una fecha")
    .default(() => new Date()),
});

const FormFood = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      price: "",
      category: "",
      description: "",
      brand: "",
      date: "",
    },
    validationSchema: Schema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <FormControl isInvalid={formik.errors.name}>
        <FormLabel>Nombre</FormLabel>
        <Input
          type="text"
          name="name"
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        <FormErrorMessage>{formik.errors.name}</FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={formik.errors.price}>
        <FormLabel>Precio</FormLabel>
        <Input
          type="number"
          name="price"
          onChange={formik.handleChange}
          value={formik.values.price}
        />
        <FormErrorMessage>{formik.errors.price}</FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={formik.errors.category}>
        <FormLabel>Categoría</FormLabel>
        <Select
          placeholder="Selecciona una categoría"
          name="category"
          onChange={formik.handleChange}
          value={formik.values.category}
        >
          {opcionesCategorias.map((categoria) => (
            <option key={categoria}>{categoria}</option>
          ))}
        </Select>
        <FormErrorMessage>{formik.errors.category}</FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={formik.errors.description}>
        <FormLabel>Descripción</FormLabel>
        <Input
          type="text"
          name="description"
          onChange={formik.handleChange}
          value={formik.values.description}
        />
        <FormErrorMessage>{formik.errors.description}</FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={formik.errors.brand}>
        <FormLabel>Marca</FormLabel>
        <Select
          placeholder="Selecciona una categoría"
          name="brand"
          onChange={formik.handleChange}
          value={formik.values.brand}
        >
          {opcionesMarca.map((categoria) => (
            <option key={categoria}>{categoria}</option>
          ))}
        </Select>
        <FormErrorMessage>{formik.errors.brand}</FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={formik.errors.date}>
        <FormLabel>Fecha de vencimiento</FormLabel>
        <Input
          type="date"
          name="date"
          onChange={formik.handleChange}
          value={formik.values.date}
        />
        <FormErrorMessage>{formik.errors.date}</FormErrorMessage>
      </FormControl>

      <button type="submit">Submit</button>
    </form>
  );
};

export default FormFood;
