function client(
    endpoint,
    {data, token, headers: customHeaders , ...customConfig} = {} as any,
  ) {
    const config = {
      method: data ? 'POST' : 'GET',
      body: data ? JSON.stringify(data) : undefined,
      headers: {
        Authorization: token ? `Bearer ${token}` : undefined,
        'Content-Type': data ? 'application/json' : undefined,
        ...customHeaders,
      },
      ...customConfig,
    }
  
    return window.fetch(`/${endpoint}`, config).then(async (response) => {
      const responseData = await response.json()
      if (response.ok) {
        return responseData
      } else {
        return Promise.reject(responseData)
      }
    })
  }
  
  const savePost = (postData:any):any => client(`post/${postData.id}`, {data: postData} as any)
  const loadGreeting = (subject) => client(`greeting`, {data: {subject}} as any)
  const reportError = (data,info) => client(`error`, {data} as any)
  const submitForm = (data) => client(`form`, {data} as any)
  
  export {savePost, loadGreeting, reportError, submitForm}
  