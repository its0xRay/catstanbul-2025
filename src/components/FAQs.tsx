import { ResourceTile } from './ResourceTile';

export function FAQs() {
  const resources = [
    {
      title: "Who can apply for travel subsidy?",
      description: "Everyone can apply. Have been contributing to Jupiverse? please apply. Relatively new to Jupiverse? please apply "
    },
    {
      title: "What is the ticket cost of Catstanbul?",
      description: "Tickets are free, with a refundable deposit of 99 JUP"
    },
    {
      title: "What is the Catstanbul location?",
      description: "Catstanbul 2025 will be held at Divan Kuruçeşme, a beautiful venue beside the Bosphorus Strait."
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
