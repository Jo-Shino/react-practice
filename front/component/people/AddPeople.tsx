import { TextField, Stack } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";
import { ProposalFormInput } from "../../pages/index";
import { ErrorMessage } from "@hookform/error-message";

const AddPeople = () => {
  const { control } = useFormContext<ProposalFormInput>();
  //   const { control } = useFormContext<Receiver>();

  return (
    <Controller
      name={`receivers.${0}.address`}
      control={control}
      // defaultValue={0}
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
            // error={errors.receivers?.address ? true : false}
            // helperText={errors.address?.message as string}
          />
          <ErrorMessage
            errors={errors}
            name={`receivers.${0}.address`}
            as="p"
            message="⚠ 商品カテゴリを入力してください"
          />
        </Stack>
      )}
    />
  );
};

export default AddPeople;
