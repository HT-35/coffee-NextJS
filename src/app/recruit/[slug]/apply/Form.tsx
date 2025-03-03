import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { TextField, Button, Box, Typography, styled } from '@mui/material';
import PersonalInfoForm from './PersionalInfoForm';
import { CloudUploadIcon } from 'lucide-react';

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

// Định nghĩa schema validation
const schema = yup
  .object({
    username: yup
      .string()
      .required('Vui lòng nhập tên người dùng')
      .min(3, 'Tên người dùng phải có ít nhất 3 ký tự'),
    phone: yup
      .string()
      .required('Vui lòng nhập số điện thoại')
      .min(9, 'Tên người dùng phải có ít nhất 3 ký tự'),
    birthday: yup
      .string()
      .required('Vui lòng nhập email')
      .email('Email không hợp lệ'),
    CMND: yup
      .string()
      .required('Vui lòng nhập CMND')
      .min(8, 'Mật khẩu phải có ít nhất 8 ký tự'),
    Email: yup
      .string()
      .required('Vui lòng nhập email')
      .min(5, 'Email tối thiểu 2 kí tự'),

    Gender: yup.string().required('Vui lòng chọn giới tính'),

    Marital_status: yup.string().required('Vui lòng chọn tình trạng hôn nhân '),

    height: yup.string().required('vui lòng nhập chiều cao'),
    nearsighted: yup.string().required('Vui lòng nhập cân nặng '),
  })
  .required();

function Form() {
  const [file, setFile] = useState<File | null>(null);
  console.log('🚀 ~ Form ~ file:', file);
  const [pdfPreview, setPdfPreview] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      setFile(file);
      setPdfPreview(URL.createObjectURL(file)); // Tạo URL tạm thời
    }
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      username: '',
      birthday: '',
      phone: '',
      CMND: '',
      Email: '',
      Gender: '',
      height: '',
      Marital_status: '',
      nearsighted: '',
    },
  });

  const onSubmit = (data) => {
    console.log(data);
    // Xử lý form
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{ maxWidth: 700, mx: 'auto', p: 1 }}
    >
      <Typography variant="h5" component="h2" gutterBottom>
        Thông tin tuyển dụng
      </Typography>

      <Controller
        name="username"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            label="Tên người dùng"
            sx={{}}
            size="small"
            fullWidth
            margin="normal"
            error={Boolean(errors.username)}
            helperText={errors.username?.message}
          />
        )}
      />

      <Controller
        name="CMND"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            label="Căn Cước Công Dân"
            type="CMND"
            size="small"
            fullWidth
            margin="normal"
            error={Boolean(errors.CMND)}
            helperText={errors.CMND?.message}
          />
        )}
      />

      <Controller
        name="phone"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            label="Số Điện Thoại"
            type="number"
            size="small"
            fullWidth
            margin="normal"
            error={Boolean(errors.phone)}
            helperText={errors.phone?.message}
          />
        )}
      />

      <Controller
        name="birthday"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            label=""
            type="date"
            size="small"
            fullWidth
            margin="normal"
            error={Boolean(errors.birthday)}
            helperText={errors.birthday?.message}
          />
        )}
      />

      <div className="flex gap-5 justify-between">
        <div className=" w-full  flex justify-center items-center">
          <Controller
            name="height"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Chiều Cao"
                type="text"
                size="small"
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '0',
                  },
                  '& .MuiInputBase-input': {
                    padding: '10px',
                  },
                }}
                fullWidth
                margin="none"
                error={Boolean(errors.height)}
                helperText={errors.height?.message}
              />
            )}
          />
          <div className=" bg-slate-300 p-2 ">cm</div>
        </div>

        <div className="w-full  flex justify-center items-center">
          <Controller
            name="nearsighted"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Cân Nặng"
                type="text"
                size="small"
                fullWidth
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '0',
                  },
                  '& .MuiInputBase-input': {
                    padding: '10px',
                  },
                }}
                margin="none"
                error={Boolean(errors.nearsighted)}
                helperText={errors.nearsighted?.message}
              />
            )}
          />
          <div className=" bg-slate-300 p-2 ">Kg</div>
        </div>
      </div>

      <Button
        component="label"
        role={undefined}
        variant="outlined"
        tabIndex={-1}
        startIcon={<CloudUploadIcon />}
        sx={{
          width: '100%',
          marginTop: '10px',
          border: '1px solid #000',
          padding: '50px',
          color: '#000',
        }}
      >
        Upload CV
        <input
          type="file"
          accept="application/pdf"
          onChange={handleFileChange}
          hidden
        />
      </Button>

      {file && <p>File đã chọn: {file.name}</p>}

      {/* Xem trước PDF */}
      {pdfPreview && (
        <iframe
          src={pdfPreview}
          width="100%"
          height="500px"
          style={{ marginTop: '20px', border: '1px solid #000' }}
          title="PDF Preview"
        ></iframe>
      )}

      <Button
        type="submit"
        variant="contained"
        color="primary"
        sx={{ mt: 3, border: '1px solid #000', color: '#000', width: '100%' }}
      >
        Đăng ký
      </Button>
    </Box>
  );
}

export default Form;
