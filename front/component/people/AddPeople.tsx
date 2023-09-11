import { TextField, Stack } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";
import { ProposalFormInput } from "../../pages/index";
interface Receiver {
  index: number;
}
const AddPeople = (props: Receiver) => {
  const { index } = props;
  const { control } = useFormContext<ProposalFormInput>();

  return (
    <Controller
      name={`receivers.${index}.address`}
      control={control}
      rules={{
        required: { value: true, message: "必須入力" },
        validate: (value) => {
          if (value !== null || "") {
            return true;
          }
          return "文字を入力してください(全角不可)";
        },
      }}
      render={({ field, formState: { errors } }) => (
        <Stack spacing={2}>
          <TextField
            {...field}
            label="address"
            fullWidth
            placeholder="012345678"
            error={errors.receivers?.[index]?.address ? true : false}
            helperText={errors.receivers?.[index]?.message as string}
          />
        </Stack>
      )}
    />
  );
};

export default AddPeople;
