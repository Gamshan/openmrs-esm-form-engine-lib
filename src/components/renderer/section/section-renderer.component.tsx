import React, { useMemo } from 'react';
import { type FormSection } from '../../../types';
import { useFormProviderContext } from '../../../provider/form-provider';
import { FormFieldRenderer } from '../field/form-field-renderer.component';
import styles from './section-renderer.scss';

export const SectionRenderer = ({ section }: { section: FormSection }) => {
  const { formFieldAdapters } = useFormProviderContext();
  const sectionId = useMemo(() => section.label.replace(/\s/g, ''), [section.label]);
  return (
    <div className={styles.section}
         style={{
           display: 'flex',
           flexDirection: 'row',
           width: '100%',
           justifyContent: 'space-between',
           flexWrap: 'wrap',
         }}>
      {section.questions.map((question) =>
        formFieldAdapters[question.type] ? (
          <div key={`${sectionId}-${question.id}`}
               style={{
                 width: `${question.width || '100%'}`,
               }}
          >
            <FormFieldRenderer
              key={question.id}
              fieldId={question.id}
              valueAdapter={formFieldAdapters[question.type]}
            />
          </div>
        ) : null,
      )}
    </div>
  );
};
