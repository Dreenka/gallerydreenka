export interface Memory {
  id: number;
  url: string;
  title: string;
  date: string;
  location: string;
  message: string;
}

export const memories: Memory[] = [
  { 
    id: 1, 
    url: 'https://picsum.photos/id/64/800/1000', // Portrait dummy
    title: 'First Encounter', 
    date: 'OCT 12', 
    location: 'Old Town',
    message: 'Momen pertama kali kita duduk berdua, dunia berasa pelan banget.'
  },
  { 
    id: 2, 
    url: 'https://picsum.photos/id/10/1900/600', // Wide dummy
    title: 'Horizon Drive', 
    date: 'NOV 04', 
    location: 'Coastal Road',
    message: 'Perjalanan panjang yang nggak kerasa karena ada kamu di samping.'
  },
  { 
    id: 3, 
    url: 'https://picsum.photos/id/28/1900/600', // Wide dummy
    title: 'City Lights', 
    date: 'NOV 20', 
    location: 'Skyline',
    message: 'Melihat lampu kota dari atas sini, tapi matamu tetap yang paling terang.'
  },
  { 
    id: 4, 
    url: 'https://picsum.photos/id/42/800/1000', // Portrait dummy
    title: 'Rainy Coffee', 
    date: 'DEC 05', 
    location: 'Warm Cafe',
    message: 'Hujan di luar, kehangatan di dalam. Secangkir kopi dan sejuta cerita.'
  },
];