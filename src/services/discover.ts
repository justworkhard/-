import request from '@/utils/request';

export async function playlist(): Promise<any> {
  return request('/server/top/playlist');
}
export async function album(): Promise<any> {
    return request('/server/top/album?offset=0&limit=8');
  }
  export async function toplist_1(): Promise<any> {
    return request('/server/top/list?idx=1');
  }
  export async function toplist_2(): Promise<any> {
    return request('/server/top/list?idx=2');
  }
  export async function toplist_3(): Promise<any> {
    return request('/server/top/list?idx=3');
  }
  export async function artist_list(): Promise<any> {
    return request('/server/artist/list?cat=1001');
  }
  