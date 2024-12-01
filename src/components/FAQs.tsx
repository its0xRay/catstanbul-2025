import { ResourceTile } from './ResourceTile';

export function FAQs() {
  const resources = [
    {
      title: "Who can apply for travel subsidy?",
      description: "Everyone can apply. Have been contributing to Jupiverse? please apply. Relatively new to Jupiverse? please apply "
    },
    {
      title: "How to reach the Catstanbul location?",
      description: "Details Coming soon!"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-8">F.A.Qs</h2>
      <div className="space-y-4">
        {resources.map((resource, index) => (
          <ResourceTile key={index} {...resource} />
        ))}
      </div>
    </div>
  );
}