import React from 'react';
import { Box } from '@mui/material';
import Wrapper from '../../shared/Wrapper';
import Block from '../../shared/Block';
import Description from '../../shared/Description';
import { RELEASE_NOTES } from './constants';
import styled from 'styled-components';
import NewReleasesIcon from '@mui/icons-material/NewReleases';
import ChipType from './components/chip-type/ChipType';

const ListWrapper = styled(Box)`
	ul {
		display: flex;
		flex-direction: column;
		gap: 15px;
		list-style-type: disc;
		padding-left: 15px;
		font-weight: 600;
		font-size: 14px;

		li::marker {
			color: #10b981;
		}
	}

	ul ul {
		list-style-type: none;
		margin-top: 5px;
		padding-left: 0;
		gap: 5px;
		font-size: 14px;
		font-weight: 300;

		li {
			font-size: 13px;
		}
	}
`

const List = ({ data }: {data: { title: string, description?: string, type: string }[]}) => {
  return (
    <ListWrapper p={1}>
      <ul>
        {data.map((i, index) => (
          <li key={index}>
            <Box display={'flex'} alignItems={'center'} gap={1}>
              {i.title}
              <ChipType type={i.type}/>
            </Box>
            {i.description && (
              <ul>
                <li>{i.description}</li>
              </ul>
            )}
          </li>
        ))}
      </ul>
    </ListWrapper>
  )
}

const ReleaseNotes = () => {
  return (
    <Wrapper>
      <Description title={'Release Notes'} icon={<NewReleasesIcon />}>
        Track the latest updates, improvements, and bug fixes. Stay informed about new features and changes across all versions.
      </Description>
      {RELEASE_NOTES.map((note, index) => (
        <Block title={`${note.title} (${note.list.length} updates)`} key={index}>
          <List data={note.list}/>
        </Block>
      ))}
    </Wrapper>
  );
};

export default ReleaseNotes;