import { TextField, Stack } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";
import { PurchaseFormInput } from "../../pages/index";
interface Receiver {
  index: number;
  removeIndex: (index: number) => void;
}
const AddPeople = (props: Receiver) => {
  const { index, removeIndex } = props;
  const { control } = useFormContext<PurchaseFormInput>();

  return (
    <Controller
      name={`receivers.${index}.receiver_name`}
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
            error={errors.receivers?.[index]?.receiver_name ? true : false}
            helperText={errors.receivers?.[index]?.message as string}
          />
          <button
            type={"button"}
            onClick={() => removeIndex(index)}
            style={{ marginLeft: "16px" }}
          >
            削除
          </button>
        </Stack>
      )}
    />
  );
};

export default AddPeople;
