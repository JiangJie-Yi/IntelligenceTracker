import Cookies from 'js-cookie';
import { jwtDecode } from 'jwt-decode';

export interface LoginRequest {
  username: string;
  password: string;
}

export interface LoginResponse {
  status: boolean;
  message: string;
  uid: string;
  token: string;
  expired: number;
}

// export interface LoginResponse {
//   username: {
//     id: number;
//     name: string;
//   };
//   token: string;
//   role?: string;
// }

export interface ApiError {
  message: string;
  code?: string;
}

const TOKEN_COOKIE_NAME = 'authToken';
const COOKIE_OPTIONS = {
  expires: 7,
  secure: process.env.NODE_ENV === 'production', // 生產環境下使用 HTTPS
  sameSite: 'strict' as const, // 限制第三方網站訪問
};

// 儲存 token 到 Cookie
export function setAuthToken(token: string): void {
  Cookies.set(TOKEN_COOKIE_NAME, token, COOKIE_OPTIONS);
}

// 從 Cookie 取得 token
export function getAuthToken(): string | undefined {
  return Cookies.get(TOKEN_COOKIE_NAME);
}

// 清除 token
export function clearAuthToken(): void {
  Cookies.remove(TOKEN_COOKIE_NAME);
}

export function isAuthenticated(): boolean {
  const token = getAuthToken();
  if (!token) return false;

  try {
    // 可選：檢查 token 是否過期
    const decoded = jwtDecode<{ exp?: number }>(token);
    if (decoded.exp && decoded.exp * 1000 < Date.now()) {
      clearAuthToken();
      return false;
    }
    return true;
  } catch (error) {
    clearAuthToken();
    return false;
  }
}

export default async function login(credentials: LoginRequest): Promise<LoginResponse> {
  try {
    const loginRespone = await fetch(
      'https://hexschool.github.io/ec-courses-api-swaggerDoc/#/v2/api/admin/signin',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      }
    );
    if (!loginRespone.ok) {
      const errorData: ApiError = await loginRespone.json().catch(() => ({
        message: 'Failed to parse error response',
      }));
      throw new Error(errorData.message || `Login failed with status: ${loginRespone.status}`);
    }

    console.log('respone:', !loginRespone.ok);

    const data = (await loginRespone.json()) as LoginResponse;
    console.log('data:', !loginRespone.ok);

    if (data.token) {
      setAuthToken(data.token);
      console.log(data);
    }
    return data;
  } catch (error) {
    if (error instanceof Error) {
      throw Error;
    }
    throw new Error('Unknown error during login');
  }
}
