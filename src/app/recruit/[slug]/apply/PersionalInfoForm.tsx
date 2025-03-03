'use client';
import React, { useState } from 'react';
import {
  Box,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  TextField,
  InputAdornment,
  Select,
  MenuItem,
  Typography,
  Paper,
  Grid,
} from '@mui/material';

const PersonalInfoForm = () => {
  const [gender, setGender] = useState('male');
  const [maritalStatus, setMaritalStatus] = useState('single');

  return (
    <Paper elevation={0} sx={{ p: 3, maxWidth: 800 }}>
      <Grid container spacing={4}>
        {/* Gender Section */}
        <Grid item xs={12} sm={6}>
          <FormControl component="fieldset">
            <FormLabel
              component="legend"
              sx={{ fontWeight: 'bold', color: 'text.primary', mb: 1 }}
            >
              Giới tính
            </FormLabel>
            <RadioGroup
              row
              name="gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <FormControlLabel
                value="male"
                control={
                  <Radio
                    sx={{
                      color: '#FFA500',
                      '&.Mui-checked': { color: '#FFA500' },
                    }}
                  />
                }
                label="Nam"
                sx={{
                  border: '1px solid #ddd',
                  borderRadius: '30px',
                  pr: 2,
                  mr: 2,
                  backgroundColor:
                    gender === 'male' ? '#FFF8E1' : 'transparent',
                }}
              />
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Nữ"
                sx={{
                  border: '1px solid #ddd',
                  borderRadius: '30px',
                  pr: 2,
                  backgroundColor:
                    gender === 'female' ? '#FFF8E1' : 'transparent',
                }}
              />
            </RadioGroup>
          </FormControl>
        </Grid>

        {/* Marital Status Section */}
        <Grid item xs={12} sm={6}>
          <FormControl component="fieldset">
            <FormLabel
              component="legend"
              sx={{ fontWeight: 'bold', color: 'text.primary', mb: 1 }}
            >
              Tình trạng hôn nhân
            </FormLabel>
            <RadioGroup
              row
              name="maritalStatus"
              value={maritalStatus}
              onChange={(e) => setMaritalStatus(e.target.value)}
            >
              <FormControlLabel
                value="single"
                control={
                  <Radio
                    sx={{
                      color: '#FFA500',
                      '&.Mui-checked': { color: '#FFA500' },
                    }}
                  />
                }
                label="Độc thân"
                sx={{
                  border: '1px solid #ddd',
                  borderRadius: '30px',
                  pr: 2,
                  mr: 2,
                  backgroundColor:
                    maritalStatus === 'single' ? '#FFF8E1' : 'transparent',
                }}
              />
              <FormControlLabel
                value="married"
                control={<Radio />}
                label="Đã kết hôn"
                sx={{
                  border: '1px solid #ddd',
                  borderRadius: '30px',
                  pr: 2,
                  backgroundColor:
                    maritalStatus === 'married' ? '#FFF8E1' : 'transparent',
                }}
              />
            </RadioGroup>
          </FormControl>
        </Grid>

        {/* Height Field */}
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <FormLabel
              component="legend"
              sx={{ fontWeight: 'bold', color: 'text.primary', mb: 1 }}
            >
              Chiều cao{' '}
              <Typography component="span" color="error">
                *
              </Typography>
            </FormLabel>
            <TextField
              placeholder="Nhập chiều cao"
              InputProps={{
                endAdornment: (
                  <InputAdornment
                    position="end"
                    sx={{
                      bgcolor: '#f5f5f5',
                      p: 1,
                      borderRadius: '0 4px 4px 0',
                    }}
                  >
                    cm
                  </InputAdornment>
                ),
              }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: '#ddd',
                  },
                },
              }}
            />
          </FormControl>
        </Grid>

        {/* Weight Field */}
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <FormLabel
              component="legend"
              sx={{ fontWeight: 'bold', color: 'text.primary', mb: 1 }}
            >
              Cân nặng{' '}
              <Typography component="span" color="error">
                *
              </Typography>
            </FormLabel>
            <TextField
              placeholder="Nhập cân nặng"
              InputProps={{
                endAdornment: (
                  <InputAdornment
                    position="end"
                    sx={{
                      bgcolor: '#f5f5f5',
                      p: 1,
                      borderRadius: '0 4px 4px 0',
                    }}
                  >
                    kg
                  </InputAdornment>
                ),
              }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: '#ddd',
                  },
                },
              }}
            />
          </FormControl>
        </Grid>

        {/* Education Level Dropdown */}
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <FormLabel
              component="legend"
              sx={{ fontWeight: 'bold', color: 'text.primary', mb: 1 }}
            >
              Trình độ học vấn{' '}
              <Typography component="span" color="error">
                *
              </Typography>
            </FormLabel>
            <Select
              displayEmpty
              renderValue={(selected) => {
                if (!selected) {
                  return (
                    <Typography color="text.secondary">
                      Chọn chương trình học
                    </Typography>
                  );
                }
                return selected;
              }}
              sx={{
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#ddd',
                },
              }}
            >
              <MenuItem value="highschool">Trung học phổ thông</MenuItem>
              <MenuItem value="college">Cao đẳng</MenuItem>
              <MenuItem value="university">Đại học</MenuItem>
              <MenuItem value="master">Thạc sĩ</MenuItem>
              <MenuItem value="phd">Tiến sĩ</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        {/* Covid Vaccination Dropdown */}
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <FormLabel
              component="legend"
              sx={{ fontWeight: 'bold', color: 'text.primary', mb: 1 }}
            >
              Tiêm sản phẩm-xin Covid-19{' '}
              <Typography component="span" color="error">
                *
              </Typography>
            </FormLabel>
            <Select
              displayEmpty
              renderValue={(selected) => {
                if (!selected) {
                  return (
                    <Typography color="text.secondary">
                      Tiêm sản phẩm-xin Covid-19
                    </Typography>
                  );
                }
                return selected;
              }}
              sx={{
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#ddd',
                },
              }}
            >
              <MenuItem value="none">Chưa tiêm</MenuItem>
              <MenuItem value="one-dose">Một mũi</MenuItem>
              <MenuItem value="two-doses">Hai mũi</MenuItem>
              <MenuItem value="booster">Ba mũi trở lên</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default PersonalInfoForm;
