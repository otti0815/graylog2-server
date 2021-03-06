// @flow strict
import * as React from 'react';
import { useRef } from 'react';
import styled, { type StyledComponent } from 'styled-components';

import { ClipboardButton, Icon } from 'components/common';
import { Alert, FormGroup, InputGroup, FormControl } from 'components/graylog';
import { type ThemeInterface } from 'theme';
import { getShowRouteFromGRN } from 'logic/permissions/GRN';

const Container: StyledComponent<{}, ThemeInterface, Alert> = styled(Alert)`
  display: flex;
  margin-top: 20px;
`;

const VerticalCenter = styled.div`
  height: 34px;
  display: flex;
  align-items: center;
`;

const URLColumn = styled.div`
  margin-left: 10px;
  flex: 1;
`;

const StyledFormControl: StyledComponent<{}, ThemeInterface, FormControl> = styled(FormControl)(({ theme }) => `
  &[readonly] {
    background-color: ${theme.colors.input.background};
  }
`);

const InputGroupAddon = styled(InputGroup.Addon)(() => `
  padding: 0;
`);

const StyledClipboardButton = styled(ClipboardButton)`
  border-radius: 0;
  border: 0;
`;

type Props = {
  entityGRN: string,
};

const ShareableEntityURL = ({ entityGRN }: Props) => {
  const container = useRef();
  const entityRoute = getShowRouteFromGRN(entityGRN);
  const entityUrl = `${window.location.origin.toString()}${entityRoute}`;

  return (
    <Container>
      <VerticalCenter>
        <b>Sharable URL:</b>
      </VerticalCenter>
      <URLColumn>
        <FormGroup>
          <InputGroup>
            <StyledFormControl type="text" value={entityUrl} readOnly />
            <InputGroupAddon>
              <span ref={container}>
                {container.current && (
                  <StyledClipboardButton text={entityUrl}
                                         container={container.current}
                                         buttonTitle="Copy parameter to clipboard"
                                         title={<Icon name="copy" fixedWidth />} />
                )}
              </span>
            </InputGroupAddon>
          </InputGroup>
        </FormGroup>
        <div>
          You or anyone authorized to view can access this link.
        </div>
      </URLColumn>
    </Container>
  );
};

export default ShareableEntityURL;
