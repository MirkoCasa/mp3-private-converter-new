const hostname = "https://private-mp3-converter-a578b023d692.herokuapp.com";

async function convert(url) {
  try {
    const response = await fetch(`${hostname}/info?url=${url}`);
    if (!response.ok) {
      throw new Error("Network response was not ok.");
    }
    const body = await response.json();
    return {
      url: url,
      details: body.videoDetails,
    };
  } catch (error) {
    console.error("Fetch error: ", error);
    return null;
  }
}

async function download(videoInfo) {
    try {
        const response = await fetch(`${hostname}/download?url=${videoInfo.url}`);
        if (!response.ok) {
            throw new Error("Network response was not ok.");
        }
        const blob = await response.blob();
        const urlBlob = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = urlBlob;
        a.download = `${videoInfo.details.title}.mp3`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(urlBlob);
    } catch (error) {
        console.error("Fetch error: ", error);
        return null;
    }
}

export { convert, download };
