import React, { FC } from 'react';
import styled from 'styled-components';

const Container = styled.div`
	background: rgba(16, 185, 129, 0.2);
	color: #10b981;
	padding: 2px 8px;
	border-radius: 6px;
	font-size: 10px;
	font-weight: 500;
	text-transform: uppercase;
`

// Helper function to get feature type display information
const getFeatureTypeInfo = (type: string) => {
  const typeMap: {[key: string]: { label: string, color: string, bgColor: string }} = {
    'new-feature': {
      label: 'New Feature',
      color: '#10b981', // Green
      bgColor: 'rgba(16, 185, 129, 0.2)'
    },
    'enhancement': {
      label: 'Enhancement',
      color: '#3b82f6', // Blue
      bgColor: 'rgba(59, 130, 246, 0.2)'
    },
    'bug-fix': {
      label: 'Bug Fix',
      color: '#ef4444', // Red
      bgColor: 'rgba(239, 68, 68, 0.2)'
    }
  };

  return typeMap[type] || typeMap['enhancement'];
};

type TypeProps = {
  type: string
}

const ChipType: FC<TypeProps> = ({type}) => {
  const chip = getFeatureTypeInfo(type)
  return (
    <Container
      style={{
        color: chip.color,
        background: chip.bgColor
      }}
    >
      {chip.label}
    </Container>
  );
};

export default ChipType;