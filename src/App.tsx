import React, { useState } from 'react';
import styled from 'styled-components';
import {
  Button,
  Label,
  Text,
  Table,
  TableHeader,
  TableRow,
  TableCell,
  TableFooter,
  Dropdown,
  RadioButton,
  Img,
  HeroImage,
  Card,
} from './components';

const AppContainer = styled.div`
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  line-height: 1.6;
  color: #333;
`;

const Section = styled.section`
  padding: 40px 20px;
  max-width: 1200px;
  margin: 0 auto;

  &:nth-child(even) {
    background-color: #f8f9fa;
  }
`;

const SectionTitle = styled.h2`
  color: #007bff;
  border-bottom: 2px solid #007bff;
  padding-bottom: 10px;
  margin-bottom: 30px;
`;

const ComponentGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin-bottom: 30px;
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

const ComponentDemo = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const ComponentTitle = styled.h3`
  color: #495057;
  margin-bottom: 15px;
`;

function App() {
  const [selectedValue, setSelectedValue] = useState('');
  const [radioValue, setRadioValue] = useState('medium');

  const dropdownOptions = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ];

  return (
    <AppContainer>
      {/* Hero Section */}
      <HeroImage
        src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
        alt="Component Library Hero"
        title="Hanz Valdez UI Garden"
        subtitle="A comprehensive React component library built with TypeScript and Styled Components"
        height="500px"
      />

      {/* Buttons Section */}
      <Section>
        <SectionTitle>Buttons</SectionTitle>
        <ComponentGrid>
          <ComponentDemo>
            <ComponentTitle>Button Variants</ComponentTitle>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              <Button label="Primary" variant="primary" />
              <Button label="Secondary" variant="secondary" />
              <Button label="Danger" variant="danger" />
              <Button label="Disabled" disabled />
            </div>
          </ComponentDemo>

          <ComponentDemo>
            <ComponentTitle>Button Sizes</ComponentTitle>
            <div
              style={{
                display: 'flex',
                gap: '10px',
                alignItems: 'center',
                flexWrap: 'wrap',
              }}
            >
              <Button label="Small" size="small" />
              <Button label="Medium" size="medium" />
              <Button label="Large" size="large" />
            </div>
          </ComponentDemo>
        </ComponentGrid>
      </Section>

      {/* Text & Labels Section */}
      <Section>
        <SectionTitle>Text & Labels</SectionTitle>
        <ComponentGrid>
          <ComponentDemo>
            <ComponentTitle>Labels</ComponentTitle>
            <div
              style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}
            >
              <Label text="Default Label" />
              <Label text="Large Label" size="large" />
              <Label text="Disabled Label" disabled />
            </div>
          </ComponentDemo>

          <ComponentDemo>
            <ComponentTitle>Text Components</ComponentTitle>
            <div
              style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}
            >
              <Text content="Regular text content" />
              <Text content="Bold text content" weight="bold" />
              <Text content="Large blue text" size="large" color="#007bff" />
            </div>
          </ComponentDemo>
        </ComponentGrid>
      </Section>

      {/* Form Components Section */}
      <Section>
        <SectionTitle>Form Components</SectionTitle>
        <ComponentGrid>
          <ComponentDemo>
            <ComponentTitle>Dropdown</ComponentTitle>
            <Label text="Select an option:" />
            <Dropdown
              options={dropdownOptions}
              placeholder="Choose an option"
              value={selectedValue}
              onChange={setSelectedValue}
            />
          </ComponentDemo>

          <ComponentDemo>
            <ComponentTitle>Radio Buttons</ComponentTitle>
            <Label text="Select size:" />
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
                marginTop: '10px',
              }}
            >
              <RadioButton
                name="size"
                value="small"
                label="Small"
                checked={radioValue === 'small'}
                onChange={setRadioValue}
              />
              <RadioButton
                name="size"
                value="medium"
                label="Medium"
                checked={radioValue === 'medium'}
                onChange={setRadioValue}
              />
              <RadioButton
                name="size"
                value="large"
                label="Large"
                checked={radioValue === 'large'}
                onChange={setRadioValue}
              />
            </div>
          </ComponentDemo>
        </ComponentGrid>
      </Section>

      {/* Data Display Section */}
      <Section>
        <SectionTitle>Data Display</SectionTitle>
        <ComponentDemo>
          <ComponentTitle>Table</ComponentTitle>
          <Table>
            <TableHeader>
              <TableRow>
                <TableCell header>Name</TableCell>
                <TableCell header>Email</TableCell>
                <TableCell header>Role</TableCell>
                <TableCell header>Status</TableCell>
              </TableRow>
            </TableHeader>
            <tbody>
              <TableRow>
                <TableCell>John Doe</TableCell>
                <TableCell>john@example.com</TableCell>
                <TableCell>Admin</TableCell>
                <TableCell>Active</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Jane Smith</TableCell>
                <TableCell>jane@example.com</TableCell>
                <TableCell>User</TableCell>
                <TableCell>Active</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Bob Johnson</TableCell>
                <TableCell>bob@example.com</TableCell>
                <TableCell>Editor</TableCell>
                <TableCell>Inactive</TableCell>
              </TableRow>
            </tbody>
            <TableFooter>
              <TableRow>
                <TableCell>Total Users: 3</TableCell>
                <TableCell>-</TableCell>
                <TableCell>-</TableCell>
                <TableCell>2 Active</TableCell>
              </TableRow>
            </TableFooter>
          </Table>
        </ComponentDemo>
      </Section>

      {/* Media Section */}
      <Section>
        <SectionTitle>Media Components</SectionTitle>
        <ComponentGrid>
          <ComponentDemo>
            <ComponentTitle>Images</ComponentTitle>
            <div
              style={{
                display: 'flex',
                gap: '15px',
                alignItems: 'center',
                flexWrap: 'wrap',
              }}
            >
              <Img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80"
                alt="Sample technology image"
                width={150}
                height={100}
              />
              <Img
                src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80"
                alt="Square technology image"
                width={100}
                height={100}
              />
            </div>
          </ComponentDemo>
        </ComponentGrid>
      </Section>

      {/* Cards Section */}
      <Section>
        <SectionTitle>Layout Components</SectionTitle>
        <CardGrid>
          <Card
            title="Feature Card"
            content="This is a sample card component that can hold various types of content. It's perfect for displaying features, products, or any structured information."
            width="100%"
          />

          <Card title="Custom Card" width="100%">
            <Text content="This card uses custom children instead of the content prop." />
            <div style={{ marginTop: '15px' }}>
              <Button label="Learn More" variant="primary" size="small" />
            </div>
          </Card>

          <Card
            title="Disabled Card"
            content="This card is in a disabled state to demonstrate the visual feedback."
            disabled
            width="100%"
          />
        </CardGrid>
      </Section>

      {/* Footer */}
      <Section
        style={{
          textAlign: 'center',
          backgroundColor: '#343a40',
          color: 'white',
        }}
      >
        <Text
          content="Assignment 12 - WEBD-3012 Business Systems Build and Testing"
          color="white"
          size="large"
          weight="bold"
        />
        <div style={{ marginTop: '10px' }}>
          <Text
            content="Student: Hanz Valdez | Red River College"
            color="#adb5bd"
          />
        </div>
      </Section>
    </AppContainer>
  );
}

export default App;
