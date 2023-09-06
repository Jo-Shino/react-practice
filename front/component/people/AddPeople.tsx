import { TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";
import { ProposalFormInput } from "../../pages/index";

const AddPeople = () => {
  const { control } = useFormContext<ProposalFormInput>();
  //   const { control } = useFormContext<Receiver>();

  return (
    <Controller
      name="address"
      control={control}
      defaultValue={0}
      rules={{
        required: { value: true, message: "必須入力" },
        validate: (value) => {
          if (!Number.isNaN(Number(value))) {
            return true;
          }
          return "数値を入力してください(全角不可)";
        },
      }}
      render={({ field, formState: { errors } }) => (
        <TextField
          {...field}
          label="address"
          fullWidth
          placeholder="012345678"
          error={errors.address ? true : false}
          helperText={errors.address?.message as string}
        />
      )}
    />
  );
};

export default AddPeople;
