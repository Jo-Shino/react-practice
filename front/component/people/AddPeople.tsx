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
    <>
      <Controller
        name={`receivers.${index}.receiver_name`}
        control={control}
        rules={{
          required: { value: true, message: "必須入力" },
          validate: (value) => {
            if (value !== null || "") {
              return true;
            }
            return "文字を入力してください";
          },
        }}
        render={({ field, formState: { errors } }) => (
          <Stack spacing={2}>
            <TextField
              {...field}
              label="receiver_name"
              fullWidth
              placeholder="田中太郎"
              error={errors.receivers?.[index]?.receiver_name ? true : false}
              helperText={errors.receivers?.[index]?.message as string}
            />
          </Stack>
        )}
      />
      <Controller
        name={`receivers.${index}.age`}
        control={control}
        rules={{
          required: { value: true, message: "必須入力" },
          validate: (value) => {
            if (!Number.isNaN(Number(value))) {
              return true;
            }
            return "数字を入力してください(全角不可)";
          },
        }}
        render={({ field, formState: { errors } }) => (
          <Stack spacing={2}>
            <TextField
              {...field}
              label="age"
              fullWidth
              placeholder="20"
              error={errors.receivers?.[index]?.receiver_name ? true : false}
              helperText={errors.receivers?.[index]?.message as string}
            />
          </Stack>
        )}
      />
      <Controller
        name={`receivers.${index}.occupation`}
        control={control}
        rules={{
          required: { value: true, message: "必須入力" },
          validate: (value) => {
            if (value !== null || "") {
              return true;
            }
            return "職業を入力してください";
          },
        }}
        render={({ field, formState: { errors } }) => (
          <Stack spacing={2}>
            <TextField
              {...field}
              label="occupation"
              fullWidth
              placeholder="学生"
              error={errors.receivers?.[index]?.receiver_name ? true : false}
              helperText={errors.receivers?.[index]?.message as string}
            />
          </Stack>
        )}
      />
      <button
        type={"button"}
        onClick={() => removeIndex(index)}
        style={{ marginLeft: "16px" }}
      >
        削除
      </button>
    </>
  );
};

export default AddPeople;
