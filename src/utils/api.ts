// api.ts

// Function to make a GET request to an API endpoint
export async function get(endpoint: string): Promise<any> {
    try {
      const response = await fetch(endpoint);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      throw new Error(`Error fetching data: ${error}`);
    }
  }
  
  // Function to make a POST request to an API endpoint
  export async function post(endpoint: string, body: any): Promise<any> {
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      throw new Error(`Error fetching data: ${error}`);
    }
  }
  