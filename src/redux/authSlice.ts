import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchLogin, fetchRegister } from '../services/axiosApi';
//import { AuthUser } from './types';
import { LoginFormInputs } from '../form/LoginForm';
import { SignupFormInputs } from '../form/SignupForm';

interface AuthState {
    user: any | null;
    status: "idle" | "loading" | "failed";
    error: string | null;
    isLoading: boolean;
    isAuthenticated: boolean;
}

const initialState: AuthState = {
    user: null,
    status: "idle",
    error: null,
    isLoading: false,
    isAuthenticated: false,
};

export const registerUser = createAsyncThunk(
    'auth/fetchRegister',
    async (credentials: SignupFormInputs, { rejectWithValue }) => {
      try {
        const response = await fetchRegister(credentials);
        return response.data;
      } catch (error: any) {
        return rejectWithValue(error.response.data);
      }
    }
);

export const loginUser = createAsyncThunk(
  'auth/fetchLogin',
  async (credentials: LoginFormInputs, { rejectWithValue }) => {
    try {
      const response = await fetchLogin(credentials);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
      state.user = action.payload.accessToken;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    clearError: (state) => {
      state.error = null;
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
        state.status = 'loading';
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.status = 'idle';
        state.user = action.payload;
        state.isAuthenticated = true;
        state.user = action.payload.accessToken;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
        state.status = "failed";
        state.error = action.error.message || 'Unknown error';
      })
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        state.status = 'loading';
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.status = 'idle';
        state.user = action.payload;
        state.isAuthenticated = true;
        state.user = action.payload.accessToken;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.status = "failed";
        state.error = action.error.message || 'Unknown error';
      });
  },
});

export const { setUser, setError, clearError, logout } = authSlice.actions;

export default authSlice.reducer;
