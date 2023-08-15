import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { TextField } from "@mui/material/";

interface IFormInputs {
  TextField: number;
  MyCheckbox: boolean;
}

export default function App() {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<IFormInputs>();
  const onSubmit: SubmitHandler<IFormInputs> = (data: IFormInputs) =>
    console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="TextField"
        control={control}
        rules={{
          required: { value: true, message: "必須入力" },
          validate: (value) => {
            if (!Number.isNaN(Number(value))) {
              return true;
            }
            return "数値を入力してください(全角不可)";
          },
        }}
        render={({ field, fieldState }) => (
          <TextField
            {...field}
            type="TextField"
            label="TextField"
            fullWidth
            placeholder="012345678"
            error={fieldState.invalid}
            helperText={fieldState.invalid ? errors.TextField?.message : ""}
          />
        )}
      />
      <input type="submit" />
    </form>
  );
}
