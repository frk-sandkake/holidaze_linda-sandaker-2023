import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { fetchRegister } from '../services/axiosApi';
import { SignupFormInputs } from '../pages/signup-login/SignupForm';
import { AuthUser } from './types';
import { AppThunk, RootState } from './store';
import http from '../services/http-common';

type AuthState = {
    user: AuthUser | null;
    accessToken: string | null;
    status: "idle" | "loading" | "succeeded" | "failed";
    error: string | null;
    isAuthenticated: boolean;
    errorMessage: string;
    isLoggedIn: boolean;
}

const initialState: AuthState = {
    user: null,
    accessToken: '',
    status: "idle",
    error: null,
    isAuthenticated: false,
    errorMessage: '',
    isLoggedIn: false,
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


const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state,
      { payload: { user, token }}: PayloadAction<{ user: AuthUser; token: string; }>) => {
      state.user = user
      state.accessToken = token
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    clearError: (state) => {
      state.error = null;
    },
    logout: (state) => {
      state.user = null;
      state.isLoggedIn = false;
    },
    loginStart: (state) => {
      state.status = 'loading';
      state.error = null;
    },
    loginSuccess: (state, action: PayloadAction<AuthUser>) => {
      state.status = "succeeded";
      state.user = action.payload;
      state.isLoggedIn = true;
      localStorage.setItem('token', action.payload.accessToken);
      localStorage.setItem('user', JSON.stringify(action.payload));
    },
    loginFailed: (state, action: PayloadAction<string>) => {
      state.status = 'failed';
      state.error = action.payload || 'Unknown error';
		  state.errorMessage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload;
        state.user = action.payload.accessToken;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || 'Unknown error';
      })
  },
});

export const { setUser, setError, loginStart, loginSuccess, loginFailed, clearError, logout } = authSlice.actions;

export const userLogin = (email: string, password: string): AppThunk => async (dispatch) => {
  dispatch(loginStart());
  try {
    const response = await http.post('/auth/login', {
      email,
      password,
    });
    if (!response.data) {
      throw {
          message: "Failed to fetch user",
          statusText: response.statusText,
          status: response.status
      }
  }
    dispatch(loginSuccess(response.data));
    localStorage.setItem('accessToken', response.data.accessToken);
  } catch (error: any) {
    const errorMessage = error as string;
    dispatch(setError(errorMessage));
  }
}

export const selectAuthStatus = (state: RootState) => state.auth.status;
export const selectAuthError = (state: RootState) => state.auth.error;
export const selectCurrentUser = (state: RootState) => state.auth.user

export default authSlice.reducer;
