import React, { useState } from 'react';
import css from "./DownloadBtn.module.scss"
const DownloadBtn= () => {
    const [downloadProgress, setDownloadProgress] = useState(0);

    const startDownload = () => {
        fetch('https://digitalcollections.thechpf.com/index.php/Detail/DownloadRepresentation/context/objects/representation_id/6092/id/6946/download/1/version/original')
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const contentLength = response.headers.get('Content-Length');
                let loadedBytes = 0;

                // @ts-ignore
                const reader = response.body.getReader();
                return new ReadableStream({
                    async start(controller) {
                        while (true) {
                            const { done, value } = await reader.read();

                            if (done) {
                                break;
                            }

                            loadedBytes += value.byteLength;
                            // @ts-ignore
                            setDownloadProgress((loadedBytes / contentLength) * 100);

                            controller.enqueue(value);
                        }

                        controller.close();
                    },
                });
            })
            .then((stream) => new Response(stream))
            .then((response) => response.blob())
            .then((blob) => {
                // Handle the downloaded file, e.g., display it or save it
            })
            .catch((error) => {
                console.error('Download failed:', error);
            });
    };

    return (
        <div className={css.downloadButton}>
            <button onClick={startDownload}>Download</button>
            {downloadProgress > 0 && downloadProgress < 100 && (
                <div className={css.progressBar}>
                    <div className={css.progress} style={{ width: `${downloadProgress}%` }}>
                        {Math.round(downloadProgress)}%
                    </div>
                </div>
            )}
        </div>
    );
};

export default DownloadBtn;
