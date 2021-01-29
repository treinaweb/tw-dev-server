import React, { useState, useEffect } from 'react';
import { GetStaticProps } from 'next';
import dynamic from 'next/dynamic';
// import { } from '@material-ui/core';

import { IndexContainer } from '@styles/pages/index.styled';
import RequisitionConfigurationInput from 'ui/components/inputs/RequisitionConfigurationInput/RequisitionConfigurationInput';
import { useIndexPage } from 'data/pages/Index.hook';

const CodeEditor = dynamic(
    () => import('ui/components/inputs/CodeEditor/CodeEditor'),
    { ssr: false }
);

export const getStaticProps: GetStaticProps = async () => {
    return {
        props: {
            title: '',
        },
    };
};

const Index: React.FC = () => {
    const {
        isConnected,
        url,
        setUrl,
        endpoint,
        setEndpoint,
        method,
        setMethod,
        onSend,
        bodyCode,
        setBodyCode,
        responseCode,
        isValidBody,
    } = useIndexPage();
    const [isBrowser, setIsBrowser] = useState(false);

    useEffect(() => {
        setIsBrowser(typeof window !== 'undefined');
    }, []);

    return (
        <IndexContainer>
            <section>
                {isBrowser && (
                    <RequisitionConfigurationInput
                        isConnected={isConnected}
                        url={url}
                        onUrlChange={setUrl}
                        endpoint={endpoint}
                        onEndpointChange={setEndpoint}
                        method={method}
                        onMethodChange={setMethod}
                        onSend={onSend}
                        isValidBody={isValidBody}
                    />
                )}
            </section>
            <section>
                <h2>Body:</h2>
                {isBrowser && (
                    <CodeEditor
                        editorId="body"
                        value={bodyCode}
                        ace={{
                            setOptions: {
                                readOnly: !isConnected,
                            },
                        }}
                        onChange={setBodyCode}
                    />
                )}
            </section>
            <section>
                <h2>Response:</h2>
                {isBrowser && (
                    <CodeEditor
                        editorId="response"
                        canCopy={Boolean(responseCode)}
                        value={responseCode}
                        ace={{
                            setOptions: {
                                readOnly: true,
                            },
                        }}
                    />
                )}
            </section>
        </IndexContainer>
    );
};

export default Index;
